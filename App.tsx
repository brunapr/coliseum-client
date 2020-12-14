import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login/index';
import Register from './src/pages/Register/index';
import Tabs from './src/pages/Tabs/index';
import EventDetails from './src/pages/EventDetails/index';

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen
          name='Login'
          component={Login}
        />
        <Screen
          name='Register'
          component={Register}
        />
        <Screen 
          name='Tabs'
          component={Tabs}
        />
        <Screen
          name='EventDetails'
          component={EventDetails}
        />
      </Navigator>
    </NavigationContainer>
  );
}
