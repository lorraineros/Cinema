import { createSlice } from "@reduxjs/toolkit";

const baseUrl = 'https://api.kvikmyndir.is';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
    moviesIsLoading: false,
    moviesError: undefined,
    selectedMovie: {},
    selectedMovieIsLoading: false,
    selectedMovieError: undefined
  },
  reducers: {
    getMoviesLoading: (state) => {
      state.moviesIsLoading = true;
    },
    getMoviesReceived: (state, action) => {
      state.moviesIsLoading = false;
      state.movies = action.payload;
      state.moviesError = undefined;
    },
    getMoviesError: (state, action) => {
      state.moviesIsLoading = false;
      state.moviesError = action.payload; 
    }
  }
});

const { getMoviesLoading, getMoviesReceived, getMoviesError } = movieSlice.actions;

export function getMovies(token) {
  return async (dispatch) => {
    try {
      dispatch(getMoviesLoading());
      const response = await fetch(`${baseUrl}/movies`, {
        headers: {
          'x-access-token': token
        }
      });
      const json = await response.json();
      dispatch(getMoviesReceived(json));
    } catch (err) {
      dispatch(getMoviesError(err.toString()));
    }
  }
}
export default movieSlice.reducer;