import css from './MoviesPage.module.css'
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import MoviesListComponent from "../../components/MoviesListComponent/MoviesListComponent";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {moviesActions} from "../../store/slice/movieSlice";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";

const  MoviesPage = () => {
    const [params] = useSearchParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            if (!params.get('genre')) {
                await dispatch(moviesActions.getByPage(params.get('page') as string));
            } else {
                await dispatch(moviesActions.getByGenre([params.get('genre'), params.get('page')] as [string, string]));
            }
        };


        fetchData();
    }, [params.get('page'), params.get('genre')]);
    const response = useAppSelector(state => state.moviesResponse.base)

    const theme = localStorage.getItem('theme')
    const theme1 = useAppSelector(state => state.moviesResponse.darkTheme);


    return (
        <div className={theme || theme1 ? css.MainPageDark : css.MainPage}>
            <MoviesListComponent movieResponse={response}/>
            <PaginationComponent overall_pages={response.total_pages}/>
        </div>
    );
};

export default MoviesPage;