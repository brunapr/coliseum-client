import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';

import { Card, DivImage, DivEventAddress, DivEventDate, DivEventName, DivEventDetails, EventAddress, EventDate, EventName} from './styles';
import img from '../../../assets/image1.png';

export default function EventSmallCard(props:any) {

    return (
        <Card onClick={props.onPress}>
            <Image source={img} style={{width:'24%', height:'100%', borderTopLeftRadius:30, borderBottomLeftRadius:30}}/>
            <DivEventDetails>
                <DivEventName> 
                    <EventName> {props.name} </EventName> 
                </DivEventName>

                <DivEventDate> 
                    <EventDate> {props.date} </EventDate> 
                </DivEventDate>

                <DivEventAddress> 
                    <EventAddress> {props.address} </EventAddress> 
                </DivEventAddress>
            </DivEventDetails>
                        
        </Card>

    );
}