import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { IGenre } from '../../interfaces/movieInterfaces';
import { moviesService } from '../../services/moviesService';
import { useAppSelector } from '../../hooks/reduxHooks';

const SidebarComponent = () => {
    const [genresArr, setGenresArr] = useState<IGenre[]>([]);
    useEffect(() => {
        moviesService.getGenresList().then(({ data }) => setGenresArr(data.genres));
    }, []);
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    const [, setSearchParams] = useSearchParams();
    const theme1 = useAppSelector(state => state.moviesResponse.darkTheme);
    const theme = localStorage.getItem('theme');

    const drawerStyle = {
        width: 250,
        color: theme || theme1 ? '#2931c4' : 'black',
        backgroundColor: theme || theme1 ? '#06102e' : 'white',
        fontFamily: 'Roboto, sans-serif',
        transition: 'color 0.3s, background-color 0.3s',
    };

    const DrawerList = (
        <Box
            sx={drawerStyle}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => {
                            setSearchParams(prev => {
                                prev.delete('genre');
                                prev.set('page', '1');
                                return prev;
                            });
                        }}
                    >
                        <ListItemText primary={'All genres'} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                {genresArr &&
                    genresArr.map(genre => (
                        <ListItem key={genre.id} disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    navigate('main');
                                    setSearchParams(prev => {
                                        prev.set('genre', `${genre.id}`);
                                        prev.set('page', '1');
                                        return prev;
                                    });
                                }}
                            >
                                <ListItemText primary={genre.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>Choose genre</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
};

export default SidebarComponent;
