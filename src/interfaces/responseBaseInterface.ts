import {IMovie} from "./movieInterfaces";

export interface IResponseBase {
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number
}