import React from 'react';
import {Routes} from './routes';
import { ThemeProvider } from 'styled-components/native';
import MarvelTheme from './assets/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={MarvelTheme}>
      <Routes />
    </ThemeProvider>
  );
};
export default App;
