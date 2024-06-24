import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieInfoPage from "./pages/MovieInfoPage/MovieInfoPage";
import SearchPage from "./pages/SearchPage/SearchPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'main?page=1'}/>},
            {path: '/main', element: <MoviesPage/>},
            {path: 'movie', element: <MovieInfoPage/>},
            {path: 'results', element: <SearchPage/>},
        ]
    }
])

export {router}