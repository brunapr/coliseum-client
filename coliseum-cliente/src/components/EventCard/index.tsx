import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';

import { Card, DivImage, DivEventDetails, DivEventInformation, DivEventAddress, DivEventDate, DivEventName, EventName, EventAddress, EventDate, TouchableCard} from './styles';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import img from '../../../assets/image3.png';

export default function EventCard(props:any) {


    return (
            <TouchableCard onPress={props.onPress}>
                <Card>

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
                            <EventAddress>{props.address}</EventAddress> 
                        </DivEventAddress>
                        
                    </DivEventDetails>
                
                    </Card>
            </TouchableCard>

    );
}