import React, {useEffect} from 'react';
import api from '../../../services/api';
import { View, Text, Button, ScrollView, TouchableHighlight} from 'react-native';

import { Header, Title, SubTitle, Content, DivButtons, Body, CurrentContainer, PreviusContainer, ButtonUnable, ButtonAble, ButtonText, ButtonDelete} from './styles';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import EventSmallCard from '../../../components/EventSmallCard/index';
import ReactDOM from 'react-dom';


Event.navigationOptions = {
    header: null,
  };

export default function Event(props:any) {

    const [ isActual,  setIsActual ] = useState(true);
    const [events, setEvents] = useState<Event[]>([]);
    const navigation = useNavigation();

    interface Event {
        id: number;
        name: string;
        city:string;
        date:string;
    }

    function handleNavigateToEventDetails(id: number) {
        navigation.navigate('EventDetails', { id });
    }

    function changeToActual (){
        setIsActual(true);
    }

    function changeToPrevius (){
        setIsActual(false);
    }

    async function getEvents(){
        await api.get('api/events').then(response => {
            setEvents(response.data);
        })
    }

    useEffect(() => {
        getEvents();
        console.log(events)
    }, []);

    return(

        <Content>
            <ScrollView>
                <Header>
                    

                        {isActual

                            
                         ?  <DivButtons>  
                                <ButtonAble onPress={changeToActual}>
                                <ButtonText>Eventos Atuais</ButtonText>
                                </ButtonAble>

                                <ButtonUnable onPress={changeToPrevius}>
                                <ButtonText style={{color: 'grey'}}>Eventos Anteriores</ButtonText>
                                </ButtonUnable>

                            </DivButtons>

                         :  <DivButtons>
                                <ButtonUnable onPress={changeToActual}>
                                <ButtonText style={{color: 'grey'}}>Eventos Atuais</ButtonText>
                                </ButtonUnable>

                                <ButtonAble onPress={changeToPrevius}>
                                <ButtonText>Eventos Anteriores</ButtonText>
                                </ButtonAble>

                            </DivButtons>
                        
                        }
                        

                </Header>

                <Body >

                { isActual

                    ? <CurrentContainer> 
                       {
                        events.map(event => {
                            return (
                                <EventSmallCard key={event.id} name= {event.name} date={event.date} address={event.city} onPress={()=>{handleNavigateToEventDetails(event.id)}}></EventSmallCard>
                            );
                        })
                        }

                    </CurrentContainer>


                    : <PreviusContainer> 
                        
                        <EventSmallCard name= "Piquenique" date="21/04/2021" address="Rua dos bobos, 21 - Madureira" > </EventSmallCard>
                        <EventSmallCard name= "Almoço comunitário" date="30/05/2021" address="Rua dos bobos, 30 - Vista Alegre"> </EventSmallCard>
                        <EventSmallCard name= "Passeio" date="01/06/2021" address="Rua dos bobos, 21 - Vila Valqueire"> </EventSmallCard>

                    </PreviusContainer>
                }

        
                </Body>
               
                
            </ScrollView>
        </Content>
    );
}