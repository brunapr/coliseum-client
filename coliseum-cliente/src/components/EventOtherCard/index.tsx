import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import { Card, DivImage, DivEventAddress, DivEventDate, DivEventName, DivEventDetails, EventAddress, EventDate, EventName} from './styles';

export default function EventOtherCard(props:any) {

    return (
        < Card>
            <DivImage> </DivImage>
            <DivEventDetails>
                <DivEventName> <EventName> {props.name} </EventName> </DivEventName>
                <DivEventDate> <EventDate> {props.date} </EventDate> </DivEventDate>
                <DivEventAddress> <EventAddress> {props.address} </EventAddress> </DivEventAddress>
            </DivEventDetails>
                        
        </Card>

    );
}