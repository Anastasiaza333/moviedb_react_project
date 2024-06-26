const baseURL = 'https://api.themoviedb.org/3';
const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
const URL = {
    movies: {base: '/discover/movie', byId:'/movie'},
    tv: {base: '/discover/tv'},
    genre:{base: '/genre/movie/list'},
    search: {byWord: '/search/movie'}
}
export {
    URL,
    baseURL,
    imgBaseUrl
}
