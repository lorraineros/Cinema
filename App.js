import React, { useEffect } from 'react';
import AppContainer from './src/routes';
import { Provider as StoreProvider, useDispatch, useSelector  } from 'react-redux';
import { getToken } from './src/redux/features/token/token-slice';
import { getCinemas } from './src/redux/features/cinema/cinema-slice';
import { getMovies } from './src/redux/features/movie/movie-slice';
import { getUpcoming } from './src/redux/features/upcoming/upcoming-slice';
import store from './src/redux/store';

export default function AppWrapper () {
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  );
}

const App = () => {
  const dispatch = useDispatch();
  // const token = useSelector((state) => {
  //   return state.token.token;
  // });

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1NzcxMDU3YzQwNzkzMzZiYzAyNTI0ZCIsImlhdCI6MTcwMjQ3NTg0NCwiZXhwIjoxNzAyNTYyMjQ0fQ.fxVnG66h_PuhFXZw1CbbxGmVvkxf-51haHeTL20dvdg";

  useEffect(() => {
    const fetchData = () => {
      try {
        // dispatch(getToken());
        // At this point, the token is guaranteed to be available or updated
        dispatch(getCinemas(token));
        dispatch(getMovies(token));
        dispatch(getUpcoming(token));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch, token])

  return(
    <AppContainer />
  )
}