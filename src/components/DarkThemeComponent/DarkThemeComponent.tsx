import {Switch} from "@mui/material";

import {useAppDispatch} from "../../hooks/reduxHooks";
import {moviesActions} from "../../store/slice/movieSlice";

const DarkThemeComponent = () => {
    const dispatch = useAppDispatch();

    const handleChange = () => {
        dispatch(moviesActions.setTheme())
    };
    const theme = localStorage.getItem('theme');

    return (
        <Switch
            checked={Boolean(theme)}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
};

export default DarkThemeComponent;