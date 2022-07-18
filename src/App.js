import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';

import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';

import configureStore, { history } from './store';
import AppRouter from './router';

const { persistor, store } = configureStore();
const theme = createTheme();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter history={history}>
          <ThemeProvider theme={theme}>
            <AppRouter />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
