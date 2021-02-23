import 'react-native-gesture-handler';
import React, { useState,  } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login/index';
import Register from './src/pages/Register/index';
import Tabs from './src/pages/Tabs/index';
import EventDetails from './src/pages/EventDetails/index';

import { user_token, useAuth, checkIsLoggedIn } from './src/services/auth';

const { Navigator, Screen } = createStackNavigator();

export default function App() {

  const [ authorization, setAuthorization ] = useState("");
  const isAuth = useAuth();
  isAuth.setAuth(true) 

  user_token().then(value => {
    setAuthorization(value);
    checkIsLoggedIn();
  });

  const AuthContext = React.createContext(authorization);
  
  return (
    <AuthContext.Provider value={authorization}>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Screen 
            name='Tabs'
            component={Tabs}
          />
          <Screen
            name='Login'
            component={Login}
          />
          <Screen
            name='Register'
            component={Register}
          />
          <Screen
            name='EventDetails'
            component={EventDetails}
          />
        </Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
