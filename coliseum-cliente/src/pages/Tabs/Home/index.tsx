import React from 'react';


import { View, Text, Button, TextInput, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { Header, Body, p, Scroll, DivTitle, Title, SubTitle, Content  } from './styles';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableHighlight } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import EventCard from '../../../components/EventCard/index';
import EventSmallCard from '../../../components/EventSmallCard/index';

Home.navigationOptions = {
    header: null,
  };


interface EditData {
    name: string,
    email: string,
    phoneNumber: string,
    password: string,
    newPassword: string,
    passwordConfirmation: string,
}
export default function Home() {

    const navigation = useNavigation();

    function goToEvent() {
        navigation.navigate('EventDetails')
    }

    return(
        <Content>
            <ScrollView>
                <Header>    
                    <LinearGradient
                        colors={['#FF4D00', '#FF9345']}
                        start = {[0,1]}
                        end={[1,0]}
                        style={{
                            position:'absolute',
                            width:"100%",
                            height:"100%",
                            borderBottomRightRadius:35,
                            borderBottomLeftRadius: 35,
                        }}
                    >
                        <DivTitle>
                        <Title>Encontre eventos perto de você</Title>
                        
                        <img src="/../../../../assets/group.png" alt=""/>
                        </DivTitle>
                        
                        
                    </LinearGradient>           

                           
                </Header>
                <Body>

                    <SubTitle>Eventos populares</SubTitle>

                    <Scroll
                        horizontal = {true} 
                    >
                        <EventCard name= "Festival de Música" date="21/04/2021" address="Rua dos bobos, 21 - Madureira" > </EventCard>
                        <EventCard name= "Show de Sertanejo" date ="30/05/2021" address="Rua dos bobos, 30 - Vista Alegre" > </EventCard>
                        <EventCard name= "Vila Mix" date ="01/06/2021" address="Rua dos bobos, 01 - Vila Valqueire"> </EventCard>

                        
                    </Scroll>
                    

                    <SubTitle>Outros eventos</SubTitle>

                    <Scroll>

                    <EventSmallCard name= "Encontro de leitores" date="21/04/2021" address="Rua dos bobos, 21 - Madureira" > </EventSmallCard>
                    <EventSmallCard name= "Food Truck" date="30/05/2021" address="Rua dos bobos, 30 - Vista Alegre"> </EventSmallCard>
                    <EventSmallCard name= "Vila Mix" date="01/06/2021" address="Rua dos bobos, 21 - Vila Valqueire"> </EventSmallCard>

                    </Scroll>
                 
                </Body>
         
                
            </ScrollView>
        </Content>
    );
}
