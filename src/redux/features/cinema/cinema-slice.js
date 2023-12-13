import { createSlice } from "@reduxjs/toolkit";

const baseUrl = 'https://api.kvikmyndir.is';

const cinemaSlice = createSlice({
  name: 'cinema',
  initialState: {
    cinemas: [],
    cinemasIsLoading: false,
    cinemasError: undefined,
    selectedCinema: {},
    selectedCinemaIsLoading: false,
    selectedCinemaError: undefined
  },
  reducers: {
    getCinemasLoading: (state) => {
      state.cinemasIsLoading = true;
    },
    getCinemasReceived: (state, action) => {
      state.cinemasIsLoading = false;
      state.cinemas = action.payload;
      state.cinemasError = undefined;
    },
    getCinemasError: (state, action) => {
      state.cinemasIsLoading = false;
      state.cinemasError = action.payload; 
    }
  }
});

const { getCinemasLoading, getCinemasReceived, getCinemasError } = cinemaSlice.actions;

export function getCinemas(token) {
  return async (dispatch) => {
    try {
      dispatch(getCinemasLoading());
      const response = await fetch(`${baseUrl}/theaters`, {
        headers: {
          'x-access-token': token
        }
      });
      const json = await response.json();
      dispatch(getCinemasReceived(json));
    } catch (err) {
      dispatch(getCinemasError(err.toString()));
    }
  }
}
export default cinemaSlice.reducer;