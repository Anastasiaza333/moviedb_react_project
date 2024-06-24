import {FC} from "react";
import {useSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";
import css from './PaginationComponent.module.css'
import {useAppSelector} from "../../hooks/reduxHooks";

export interface IProps {
    overall_pages: number
}
const PaginationComponent : FC<IProps>= ({overall_pages}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    let count = overall_pages;
    if(overall_pages>500){
        count=500;
    }
    const theme = localStorage.getItem('theme')
    const theme1 = useAppSelector(state => state.moviesResponse.darkTheme);

    return (
        <div className={css.PaginationContainer}>
            <Pagination count={count}
                        onChange={(_, page) =>
                            setSearchParams(prev => {
                                prev.set('page', page.toString());
                                window.scrollTo(0,0)
                                return prev;
                            })}
                        page={Number(searchParams?.get('page'))}
                        sx={{
                            '& .MuiPaginationItem-root': {
                                color: theme || theme1 ? '#2931c4' : 'black',
                            }}}
            />
        </div>
    );
};

export default PaginationComponent;