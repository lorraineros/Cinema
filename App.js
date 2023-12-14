import React from 'react';
import AppContainer from './src/routes';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/redux/store';

export default function App () {
  return (
    <StoreProvider store={store}>
      <AppContainer />
    </StoreProvider>
  );
}