import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { FaChevronCircleLeft } from 'react-icons/fa';

import api from '../../services/api';

import img from '../../../assets/group.png';

import { Container, WhiteBox, Header, Title, SubTitle, Form, InputBox, Input, ButtonContainer, LoginButton, RegisterButton, LoginText, RegisterText, BackIcon } from './styles';

interface FormData {
    email: string;
    password: string;
}

// const img = { uri: "../../../assets/group.png" };

export default function Login() {

    const { control, handleSubmit, errors } = useForm({ mode: 'onTouched' });
    const onSubmit = (data: FormData) => { 
        console.log(data)
        api.post('api/login', data).then(response => {
            console.log(response.data.message)
            alert('Login feito com sucesso!')
            localStorage.setItem('token', response.data.token)
            document.location.reload(true);
            navigation.navigate('Home')
        }, 
        (error => ('Login não pode ser concluído.'))) };

    const onError = (errors: Object) => { console.log(errors) };
    const navigation = useNavigation();
    

    return (
        <ImageBackground source={img} style={{flex: 1}}>
        <Container>
            <BackIcon onPress={() => {navigation.navigate('Home'); document.location.reload(true);}}>
                <FaChevronCircleLeft size={36} color={'#fff'}/>
            </BackIcon>
            <WhiteBox>
                <Header>
                    <Title>Sextou?</Title>
                    <SubTitle>Deixa que achamos a diversão.</SubTitle>
                </Header>
                <Form>
                    <InputBox>
                        <Controller
                            control={control}
                            render={(props) => (
                                <Input
                                    placeholder="E-mail"
                                    autoCompleteType='email'
                                    autoCorrect={false}
                                    keyboardType='email-address'
                                    textContentType='emailAddress'
                                    onBlur={props.onBlur}
                                    onChangeText={(value) => props.onChange(value)}
                                    value={props.value}
                                />
                            )}
                            rules={{
                                required: 'O e-mail é obrigatório.',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Formato de e-mail inválido.'
                                },
                            }}
                            name='email'
                            defaultValue=''
                        />
                        {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}
                    </InputBox>
                    <InputBox>
                        <Controller
                            control={control}
                            render={(props) => (
                                <Input
                                    placeholder="Senha"
                                    secureTextEntry
                                    autoCompleteType='password'
                                    autoCorrect={false}
                                    textContentType='password'
                                    onBlur={props.onBlur}
                                    onChangeText={(value) => props.onChange(value)}
                                    value={props.value}
                                />
                            )}
                            rules={{ required: 'A senha é obrigatória.' }}
                            name='password'
                            defaultValue=''
                        />
                        {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}
                    </InputBox>
                    <ButtonContainer>
                        <LoginButton onPress={handleSubmit(onSubmit, onError)}>
                            <LoginText>ENTRAR</LoginText>
                        </LoginButton>
                    </ButtonContainer>
                    <ButtonContainer>
                        <RegisterButton onPress={() => navigation.navigate('Register')}>
                            <RegisterText>CADASTRAR-SE</RegisterText>
                        </RegisterButton>
                    </ButtonContainer>
                </Form>
            </WhiteBox>
        </Container>
        </ImageBackground>
    );
}

