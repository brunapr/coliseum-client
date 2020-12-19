import React from 'react';

import { View, Text, Button, ScrollView, Alert} from 'react-native';

import { Header, Title, SubTitle, Content, DivButtons} from './styles';
import { useState } from 'react';

import EventSmallCard from '../../../components/EventSmallCard/index';


Event.navigationOptions = {
    header: null,
  };

export default function Event() {

    return(
        <Content>
            <ScrollView>
                <Header>
                    <DivButtons> 

                        <Button
                            title="Eventos Atuais"
                       
                            onPress={() => Alert.alert('Simple Button pressed')}
                        />

                        <Button
                            title="Eventos Anteriores"
                          
                            onPress={() => Alert.alert('Simple Button pressed')}
                        />
                    </DivButtons>

                </Header>


                <EventSmallCard name= "Encontro de leitores" date="21/04/2021" address="Rua dos bobos, 21 - Madureira" > </EventSmallCard>
                <EventSmallCard name= "Food Truck" date="30/05/2021" address="Rua dos bobos, 30 - Vista Alegre"> </EventSmallCard>
                <EventSmallCard name= "Vila Mix" date="01/06/2021" address="Rua dos bobos, 21 - Vila Valqueire"> </EventSmallCard>
            
                
            </ScrollView>
        </Content>
    );
}