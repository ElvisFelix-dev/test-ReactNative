import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';

import theme from '../src/global/styles/theme';
import Routes from '../src/routes/routes';

export default function App() {
  return(
    <>
     <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="#5636D3" />
          <Routes />
        </ThemeProvider>
     </NavigationContainer>
    </>
  )
}
