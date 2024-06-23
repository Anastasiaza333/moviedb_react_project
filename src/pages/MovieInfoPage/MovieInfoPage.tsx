import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {moviesActions} from '../../store/slice/movieSlice';
import {useEffect} from "react";
import MovieInfoComponent from '../../components/MovieInfoComponent/MovieInfoComponent';
import css from './MovieInfoPage.module.css'
import {useSearchParams} from "react-router-dom";

const MovieInfoPage = () => {
    const [params] = useSearchParams();
    const data= useAppSelector(state => state.moviesResponse.byId);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(moviesActions.getById(params.get('movieId') as string));
        }
        fetchData()
    }, []);
    const theme = localStorage.getItem('theme')
    const theme1 = useAppSelector(state => state.moviesResponse.darkTheme);

    return (
        <div className={theme || theme1 ? css.MovieInfoPageDark : css.MovieInfoPage}>
            <MovieInfoComponent movieInfo={data}/>
            </div>
    );
};

export default MovieInfoPage;