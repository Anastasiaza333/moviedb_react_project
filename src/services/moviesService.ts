import {URL} from '../consts/urls';
import {apiService} from "./apiService";
import {AxiosResponse} from "axios";
import {IResponseBase} from "../interfaces/responseBaseInterface";
import {IMovieDetail} from "../interfaces/movieDetailsInterface";
import {IGenres} from "../interfaces/genresInterface";

const moviesService = {
    getByPage: async (page:string) : Promise<AxiosResponse<IResponseBase>> => await apiService(URL.movies.base+`?page=${page}`),
    getById: async (id: string) : Promise<AxiosResponse<IMovieDetail>> => await  apiService(URL.movies.byId+`/${id}`),
    getMovieByGenderId: (genderId : string, page : string) : Promise<AxiosResponse<IResponseBase>> => apiService(URL.movies.base+`?with_genres=${genderId}&page=${page}`),
    search: (request : string, page : string) : Promise<AxiosResponse<IResponseBase>> => apiService(URL.search.byWord+`?query=${request}&page=${page}`),
    getGenresList: async () : Promise<AxiosResponse<IGenres>> => await apiService.get(URL.genre.base)
}
export {moviesService}