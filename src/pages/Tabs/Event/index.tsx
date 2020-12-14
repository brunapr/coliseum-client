import React from 'react';

import { View, Text, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { InputLabel, Input } from '../../styles';
import { Header, Title, SubTitle, Content, SubmitButton, Form, FormBox } from './styles';
import { useState } from 'react';

Event.navigationOptions = {
    header: null,
  };

export default function Event() {

    return(
        <Content>
            <ScrollView>
                <Header>
                    <Title>Eventos</Title>
                    <SubTitle>Confira agora os melhores eventos</SubTitle>

                </Header>
            
                
            </ScrollView>
        </Content>
    );
}