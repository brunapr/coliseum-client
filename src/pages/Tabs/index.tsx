import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';

import { BiHome, BiSearch, BiMap, BiSticker, BiUser } from "react-icons/bi";
import { TabBar, IconBox, IconButton, Container, Content } from './styles';

import Account from './Account/index';
import Home from './Home/index';
import Search from './Search/index';
import Map from './Map/index';
import Event from './Event/index';
import { ScrollView } from 'react-native-gesture-handler';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

    export default function MyTabs() {
        return (
 
        
        
          <Tab.Navigator
          tabBarOptions={{
            showLabel:false,
            activeBackgroundColor:"#F1F1F1",
        }}>
            <Tab.Screen name="Home" component={Home} 
            options={{
                tabBarIcon:({}) =>(
                    <BiHome size="30" color='#FF4D00'/>
                ),
            }}
            />

            <Tab.Screen name="Search" component={Search} 
            options={{
                tabBarIcon:({}) =>(
                    <BiSearch size="30" color='#FF4D00'/>
                ),
            }}
            />

            <Tab.Screen name="Map" component={Map} 
            options={{
                tabBarIcon:({}) =>(
                    <BiMap size="30" color='#FF4D00'/>
                ),
            }}
            />

<           Tab.Screen name="Event" component={Event} 
            options={{
                tabBarIcon:({}) =>(
                    <BiSticker size="30" color='#FF4D00'/>
                ),
            }}
            />

            <Tab.Screen name="User" component={Account} 
            options={{
                tabBarIcon:({}) =>(
                    <BiUser size="30" color='#FF4D00'/>
                ),
            }}
            />
            
          </Tab.Navigator>
        );
      }
    