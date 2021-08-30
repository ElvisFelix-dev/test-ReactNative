import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Dashboard from '../screens/Dashboard';
import Status from '../screens/Status';

const Router = createNativeStackNavigator();

export default function Routes() {
  return (
    <Router.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#5636D3'
        }
      }}>
      <Router.Screen name="Dashboard" component={Dashboard} />
      <Router.Screen name="Status" component={Status} />
    </Router.Navigator>
  );
}
