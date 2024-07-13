"use client";

import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyled';
// import Layout from '@/app/layout';
import HomePage from '@/app/(home)';

const theme = {
  // Add any theme variables here
};

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <HomePage />
  </ThemeProvider>
);

export default App;
