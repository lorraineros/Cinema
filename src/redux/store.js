import { configureStore } from "@reduxjs/toolkit";
import cinemaReducer from "./features/cinema/cinema-slice"; 
import movieReducer from "./features/movie/movie-slice"; 

export default configureStore({
  reducer: {
    cinema: cinemaReducer,
    movie: movieReducer
  }
});