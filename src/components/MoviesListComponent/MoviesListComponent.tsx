import css from './MoviesListComponent.module.css'
import {FC} from "react";
import MovieListCardComponent from "../MovieListCardComponent/MovieListCardComponent";
import {IResponseBase} from "../../interfaces/responseBaseInterface";
interface Props {
    movieResponse: IResponseBase
}
const MoviesListComponent : FC<Props> = ({movieResponse}) => {

    return (
        <div className={css.MoviesList}>
            {
                movieResponse.results && movieResponse.results.map((movie) => <MovieListCardComponent movie={movie} key={movie.id}/>)
            }
        </div>

    );
};

export default MoviesListComponent;