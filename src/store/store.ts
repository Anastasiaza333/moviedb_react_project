import {configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slice/movieSlice";

const store = configureStore({
    reducer: {
        moviesResponse: moviesReducer
    }
})
export {store}