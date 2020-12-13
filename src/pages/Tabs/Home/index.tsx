import React from 'react';

import { View, Text, Button, TextInput, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { InputLabel, Input } from '../../styles';
import { Header, Title, SubTitle, Content, SubmitButton, Form, FormBox } from './styles';
import { useState } from 'react';

import EventDetails from '../../EventDetails/index';
import { TouchableOpacity } from 'react-native-gesture-handler';

Home.navigationOptions = {
    header: null,
  };

interface EditData {
    name: string,
    email: string,
    phoneNumber: string,
    password: string,
    newPassword: string,
    passwordConfirmation: string,
}

export default function Home() {

    const [ openDetails, setOpenDetails ] = useState(false);

    return(
        <Content>
            <ScrollView>
                <Header>
                    <Title>Home</Title>
                    <SubTitle>Veja os eventos perto de você</SubTitle>
                </Header>
                
            </ScrollView>
        </Content>
    );
}