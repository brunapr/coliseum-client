import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import { Card, DivImage, DivEventDetails, DivEventInformation, DivEventAddress, DivEventDate, DivEventName, EventName, EventAddress, EventDate} from './styles';
import { useNavigation } from '@react-navigation/native';

export default function EventCard(props:any) {

    return (

        <Card>

            <DivImage>
            
                <Button title="CLICA AQUI" onPress={()=>null}/>
            </DivImage>
            <DivEventDetails>
                <DivEventInformation>
                    <DivEventName> <EventName>{props.name}</EventName></DivEventName> <DivEventDate> <EventDate>{props.date}</EventDate></DivEventDate>
                </DivEventInformation>
                
                <DivEventAddress> <EventAddress> {props.address} </EventAddress> </DivEventAddress>
            </DivEventDetails>
           

        </Card>

    );
}