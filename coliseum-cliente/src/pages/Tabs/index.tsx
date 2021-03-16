import 'react-native-gesture-handler';
import React, { useContext, useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import Account from './Account/index';
import Home from './Home/index';
import Search from './Search/index';
import Map from './Map/index';
import Event from './Event/index';
import LoginNavigate from '../../components/LoginNavigate';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AuthContext from '../../services/auth';

const Tab = createBottomTabNavigator();

    export default function MyTabs(props:any) {
        
        const Auth = useContext(AuthContext);

        const [ checkLogIn, setCheckLogin ] = useState(false);

        useEffect(() => {   
            setCheckLogin(Auth.signed);
        }, [Auth.signed, Auth, Auth.token, checkLogIn])

        return (
            <Tab.Navigator
                tabBarOptions={{
                    showLabel:false,
                    activeBackgroundColor:"#F1F1F1",
            }}>
                <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarIcon:({}) =>(
                        <Icon name="home" size={30} color="#FF4D00" />
                    ),
                }}
                />

                <Tab.Screen name="Search" component={Search} 
                options={{
                    tabBarIcon:({}) =>(
                        <Icon name="search" size={30} color="#FF4D00" />
                    ),
                }}
                />

                <Tab.Screen name="Map" component={Map} 
                options={{
                    tabBarIcon:({}) =>(
                        <Icon name="map" size={30} color="#FF4D00" />
                    ),
                }}
                />
                {
                    Auth.signed == true && 
                        <Tab.Screen name="Event" component={Event}
                        options={{
                            tabBarIcon:({}) =>(
                                <Icon name="zap" size={30} color="#FF4D00" />
                            ),
                        }}
                        />
                }

                {
                    Auth.signed == true ? 
                        <Tab.Screen name="User" component={Account} 
                        options={{
                            tabBarIcon:({}) =>(
                                <Icon name="user" size={30} color="#FF4D00" />
                            ),
                        }}
                        /> :
                        <Tab.Screen name="User" component={LoginNavigate} 
                        options={{
                            tabBarIcon:({}) =>(
                                <Icon name="user" size={30} color="#FF4D00" />
                            ),
                        }}
                        />
                }
                
            </Tab.Navigator>
        );
      }
    