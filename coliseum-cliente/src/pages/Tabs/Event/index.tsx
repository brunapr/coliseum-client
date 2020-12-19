import React from 'react';

import { View, Text, Button, ScrollView, Alert} from 'react-native';

import { Header, Title, SubTitle, Content, DivButtons} from './styles';
import { useState } from 'react';


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
                            color="#f2f2f2"
                            onPress={() => Alert.alert('Simple Button pressed')}
                        />

                        <Button
                            title="Eventos Anteriores"
                            color="#f2f2f2"
                            onPress={() => Alert.alert('Simple Button pressed')}
                        />
                    </DivButtons>
                    

                </Header>
            
                
            </ScrollView>
        </Content>
    );
}