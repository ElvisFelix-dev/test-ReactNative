import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  return(
    <>
      <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="#5636D3" />
        <Dashboard />
      </ThemeProvider>
    </>
  )
}
