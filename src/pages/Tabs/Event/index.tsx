import React from 'react';

import { View, Text, Button, TextInput, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { InputLabel, Input } from '../../styles';
import { Header, Title, SubTitle, Content, SubmitButton, Form, FormBox } from './styles';
import { useState } from 'react';

Event.navigationOptions = {
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

export default function Event() {

    const { control, getValues, handleSubmit, errors } = useForm({ mode: 'onTouched' });
    const onSubmit = (data: EditData) => { console.log(data) };
    const onError = (errors: Object) => { console.log(errors) };

    const [editPassword, setEditPassword] = useState(false);

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