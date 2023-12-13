import { createSlice } from "@reduxjs/toolkit";

const baseUrl = 'https://api.kvikmyndir.is';

const upcomingSlice = createSlice({
  name: 'upcoming',
  initialState: {
    upcoming: [],
    upcomingIsLoading: false,
    upcomingError: undefined,
  },
  reducers: {
    getUpcomingLoading: (state) => {
      state.upcomingIsLoading = true;
    },
    getUpcomingReceived: (state, action) => {
      state.upcomingIsLoading = false;
      state.upcoming = action.payload;
      state.upcomingError = undefined;
    },
    getUpcomingError: (state, action) => {
      state.upcomingIsLoading = false;
      state.upcomingError = action.payload; 
    }
  }
});

const { getUpcomingLoading, getUpcomingReceived, getUpcomingError } = upcomingSlice.actions;

export function getUpcoming(token) {
  return async (dispatch) => {
    try {
      dispatch(getUpcomingLoading());
      const response = await fetch(`${baseUrl}/upcoming`, {
        headers: {
          'x-access-token': token
        }
      });
      const json = await response.json();
      dispatch(getUpcomingReceived(json));
    } catch (err) {
      dispatch(getUpcomingError(err.toString()));
    }
  }
}
export default upcomingSlice.reducer;