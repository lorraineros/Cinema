import base64 from 'react-native-base64'
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
      state.token = {};
      state.tokenError = action.payload; 
    }
  }
});

const { getTokenLoading, getTokenReceived, getTokenError } = tokenSlice.actions;

export function getToken(username, password) {
  return async (dispatch) => {
    try {
      dispatch(getTokenLoading());
      console.log(username, password)
      const base64Credentials = base64.encode(`${username}:${password}`);
      const response = await fetch(`${baseUrl}/authenticate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Basic ${base64Credentials}`
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