import 'react-native-gesture-handler';
import React, { useEffect, useState,  } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login/index';
import Register from './src/pages/Register/index';
import Tabs from './src/pages/Tabs/index';
import EventDetails from './src/pages/EventDetails/index';

import AuthContext, { user_token } from './src/services/auth';
import Comments from './src/pages/Comments';

const { Navigator, Screen } = createStackNavigator();

export default function App() {

  const [ authorization, setAuthorization ] = useState("");
  const [ checkLogIn, setCheckLogIn ] = useState(false);

  useEffect(() => {
    user_token().then(value => {
      setAuthorization(value);
    });
  }, [])

  function checkIsLoggedIn() {
    if (authorization != "") {
        setCheckLogIn(true);
    } else {
        setCheckLogIn(false);
    }
  }

  useEffect(() => {
    checkIsLoggedIn();
  }, [authorization, checkLogIn])

  return (
    <AuthContext.Provider value={{token: authorization, setToken: setAuthorization, signed: checkLogIn}}>
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
          <Screen
            name='Comments'
            component={Comments}
          />
        </Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
