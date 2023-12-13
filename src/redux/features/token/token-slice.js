import { createSlice } from "@reduxjs/toolkit";

const baseUrl = 'https://api.kvikmyndir.is';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: {},
    tokenIsLoading: false,
    tokenError: undefined
  },
  reducers: {
    getTokenLoading: (state) => {
      state.tokenIsLoading = true;
    },
    getTokenReceived: (state, action) => {
      state.tokenIsLoading = false;
      state.token = action.payload;
      state.tokenError = undefined;
    },
    getTokenError: (state, action) => {
      state.tokenIsLoading = false;
      state.tokenError = action.payload; 
    }
  }
});

const { getTokenLoading, getTokenReceived, getTokenError } = tokenSlice.actions;

export function getToken() {
  return async (dispatch) => {
    try {
      dispatch(getTokenLoading());
      const response = await fetch(`${baseUrl}/authenticate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Basic YW5oMDUxMjp0aHV2dTUxMg=='
        },
      });
      const json = await response.json();
      dispatch(getTokenReceived(json.token));
    } catch (err) {
      dispatch(getTokenError(err.toString()));
    }
  }
}
export default tokenSlice.reducer;