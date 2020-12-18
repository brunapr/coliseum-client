import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import { Card, DivImage, DivInfo} from './styles';
import { useNavigation } from '@react-navigation/native';

export default function EventCard(props:any) {

    return (

        <Card>

            <DivImage>
                <Button title="CLICA AQUI" onPress={()=>null}/>
            </DivImage>
            <DivInfo>
                <h3>{props.name}</h3> <p>{props.date}</p>
                <p>{props.adress}</p>
            </DivInfo>
           

        </Card>

    );
}