import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./features/token/token-slice";
import cinemaReducer from "./features/cinema/cinema-slice"; 
import movieReducer from "./features/movie/movie-slice"; 

export default configureStore({
  reducer: {
    token: tokenReducer,
    cinema: cinemaReducer,
    movie: movieReducer
  }
});