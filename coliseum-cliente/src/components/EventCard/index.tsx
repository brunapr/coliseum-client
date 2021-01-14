import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';

import { Card, DivImage, DivEventDetails, DivEventInformation, DivEventAddress, DivEventDate, DivEventName, EventName, EventAddress, EventDate} from './styles';
import { useNavigation } from '@react-navigation/native';

import img from '../../../assets/image3.png';

export default function EventCard(props:any) {

    return (

        <Card >
            <Image source={img} style={{width:'100%', height:'65%', borderTopLeftRadius:30, borderTopRightRadius:30}}/>
            
            <DivEventDetails>
                <DivEventInformation>
                    <DivEventName> 
                        <EventName>{props.name}</EventName>
                    </DivEventName> 

                    <DivEventDate> 
                        <EventDate>{props.date}</EventDate>
                    </DivEventDate>
                </DivEventInformation>
                
                <DivEventAddress> 
                    <EventAddress> {props.address} </EventAddress> 
                </DivEventAddress>
            </DivEventDetails>
           

        </Card>

    );
}