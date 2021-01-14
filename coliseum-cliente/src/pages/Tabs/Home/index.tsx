import React, { useEffect } from 'react';

import api from '../../../services/api';

import { ScrollView } from 'react-native';

import { Header, Body, Scroll, DivTitle, Title, SubTitle, Content  } from './styles';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import EventCard from '../../../components/EventCard/index';
import EventSmallCard from '../../../components/EventSmallCard/index';

Home.navigationOptions = {
    header: null,
  };

interface Event {
    id: number;
    name: string;
    city:string;
    date:string;
}

export default function Home() {

    function goToEvent() {
        navigation.navigate('EventDetails')
    }

    const [events, setEvents] = useState<Event[]>([]);
    const navigation = useNavigation();

    useEffect(() => {
        api.get('api/events').then(response => {
            setEvents(response.data);
        })
    }, []);

    function handleNavigateToEventDetails(id: number) {
        navigation.navigate('EventDetails', { id });
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
                        
                        </DivTitle>
                        
                        
                    </LinearGradient>           

                           
                </Header>
                <Body>

                    <SubTitle>Eventos populares</SubTitle>

                    <Scroll
                        horizontal = {true} 
                    >

                        {
                            events.map(event => {
                                return (
                                    <EventCard key={event.id} name= {event.name} date={event.date} address={event.city} > </EventCard>
                                   
                                );
                            })
                        }

                        
                    </Scroll>
                    

                    <SubTitle>Outros eventos</SubTitle>

                    <Scroll>

                    {
                    events.map(event => {
                        return (
                            <EventSmallCard key={event.id} name= {event.name} date={event.date} address={event.city}> </EventSmallCard>
                        );
                    })
                    }  


                    </Scroll>
                 
                </Body>
         
                
            </ScrollView>
        </Content>
    );
}
