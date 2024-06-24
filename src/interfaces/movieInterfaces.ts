export interface IBelongsToCollection {
    id: number,
    name: string,
    poster_path: string,
    backdrop_path: string
}
export interface IGenre {
    id: number;
    name: string
}
export interface ISpokenLanguage{
    english_name: string,
    iso_639_1: string,
    name: string
}
export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
export interface IProductionCompany{
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
}
export interface IProductionCountry {
    iso_3166_1: string,
    name: string
}