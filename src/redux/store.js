import { configureStore } from "@reduxjs/toolkit";
import cinemaReducer from "./features/cinema/cinema-slice"; 

export default configureStore({
  reducer: {
    cinema: cinemaReducer
  }
});