import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { TextInputMask } from 'react-native-masked-text';
import { RadioButton } from 'react-native-paper';

import { Container, Content, Title, InputBox, InputLabel, BackIcon } from '../styles';
import { SubmitButton, Input } from './styles';
import { FaChevronCircleLeft } from 'react-icons/fa';

import api from '../../services/api';


interface RegisterData {
    name: string,
    email: string,
    birthdate: string,
    gender: string,
    password: string,
    passwordConfirmation: string,
}

export default function Register() {
    const { control, getValues, handleSubmit, errors } = useForm({ mode: 'onTouched' });
    const onSubmit = (data: RegisterData) => { 
        console.log(data)
        api.post('api/register', data).then(response => {
            console.log('Cadastro feito com sucesso!')
            alert('Cadastro feito com sucesso!')
            navigation.navigate('Login')
        }, 
        (error => ('Cadastro não pode ser concluído.'))) 
    };
    const onError = (errors: Object) => { console.log(errors) };
    const navigation = useNavigation();

    return (
        <Container>
            <BackIcon style={{top:20}} onPress={() => navigation.navigate('Login')}>
                <FaChevronCircleLeft size={36} color={'#32CFE3'}/>
            </BackIcon>
            <Content>
                <Title>Crie sua conta</Title>
                <InputBox>
                    <InputLabel>Nome</InputLabel>
                    <Controller
                        control={control}
                        render={({ onBlur, onChange, value }) => (
                            <Input
                                autoCompleteType='name'
                                autoCorrect={false}
                                textContentType='name'
                                onBlur={onBlur}
                                onChangeText={(value:any) => onChange(value)}
                                value={value}
                            />
                        )}
                        rules={{ required: 'O nome é obrigatório.' }}
                        name='name'
                        defaultValue=''
                    />
                    {errors.name && <Text style={{ color: 'red' }}>{errors.name.message}</Text>}
                </InputBox>

                <InputBox>
                    <InputLabel>E-mail</InputLabel>
                    <Controller
                        control={control}
                        render={(props) => (
                            <Input
                                autoCompleteType='email'
                                autoCorrect={false}
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                onBlur={props.onBlur}
                                onChangeText={(value:any) => props.onChange(value)}
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
                    <InputLabel>Data de Nascimento</InputLabel>
                    <Controller
                        control={control}
                        render={(props) => (
                            <TextInputMask
                                placeholder='DD/MM/AAAA'
                                type={'datetime'}
                                keyboardType='numeric'
                                onBlur={props.onBlur}
                                options={{
                                    format: 'DD/MM/YYYY'
                                }}
                                value={props.value}
                                onChangeText={(value) => props.onChange(value)}
                                style={{
                                    width: '100%',
                                    padding: '3%', paddingLeft: '5%',
                                    backgroundColor: '#fff',
                                    borderRadius: 100,
                                    shadowOffset: { width: 2, height: 2 }, shadowColor: 'black', shadowOpacity: 0.25, shadowRadius: 4,
                                }}
                            />
                        )}
                        rules={{
                            required: 'A data de nascimento é obrigatória.',
                            
                        }}
                        name='birthdate'
                        defaultValue=''
                    />
                    {errors.birthdate && <Text style={{ color: 'red' }}>{errors.birthdate.message}</Text>}
                </InputBox>

                <InputBox>
                    <InputLabel>Gênero</InputLabel>
                    <Controller
                        control={control}
                        render={(props) => (
                            <View>
                                <RadioButton.Group onValueChange={(value) => props.onChange(value)} value={props.value}>
                                    <RadioButton.Item color='#32CFE3' label="Feminino" value="feminino" />
                                    <RadioButton.Item color='#32CFE3' label="Masculino" value="masculino" />
                                    <RadioButton.Item color='#32CFE3' label="Outro" value="outro" />
                                </RadioButton.Group>
                            </View>
                        )}
                        rules={{ required: 'Esse campo é obrigatório.' }}
                        name='gender'
                        defaultValue=''
                    />
                    {errors.gender && <Text style={{ color: 'red' }}>{errors.gender.message}</Text>}
                </InputBox>

                <InputBox>
                    <InputLabel>Senha</InputLabel>
                    <Controller
                        control={control}
                        render={(props) => (
                            <Input
                                secureTextEntry
                                autoCompleteType='password'
                                autoCorrect={false}
                                textContentType='newPassword'
                                onBlur={props.onBlur}
                                onChangeText={(value:any) => props.onChange(value)}
                                value={props.value}
                            />
                        )}
                        rules={{ required: 'A senha é obrigatória.' }}
                        name='password'
                        defaultValue=''
                    />
                    {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}
                </InputBox>

                <InputBox>
                    <InputLabel>Confirmação de senha</InputLabel>
                    <Controller
                        control={control}
                        render={(props) => (
                            <Input
                                secureTextEntry
                                autoCompleteType='password'
                                autoCorrect={false}
                                textContentType='password'
                                onBlur={props.onBlur}
                                onChangeText={(value:any) => props.onChange(value)}
                                value={props.value}
                            />
                        )}
                        rules={{
                            required: 'A confirmação de senha é obrigatória.',
                            validate: {
                                matchesPreviousPassword: (value) => {
                                    const { password } = getValues();
                                    return password === value || 'As senhas não coincidem.';
                                }
                            }
                        }}
                        name='passwordConfirmation'
                        defaultValue=''
                    />
                    {errors.passwordConfirmation && <Text style={{ color: 'red' }}>{errors.passwordConfirmation.message}</Text>}
                </InputBox>
                
                <SubmitButton>
                    <Button color="transparent" title='CADASTRAR' onPress={handleSubmit(onSubmit, onError)} />
                </SubmitButton>
            </Content>
        </Container>
    )
}