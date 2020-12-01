import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

import { Container, Content, Title, InputBox, InputLabel } from '../styles';
import { SubmitButton, Input } from './styles';

interface RegisterData {
    name: string,
    email: string,
    phoneNumber: string,
    password: string,
    passwordConfirmation: string,
}

export default function Register() {
    const { control, getValues, handleSubmit, errors } = useForm({ mode: 'onTouched' });
    const onSubmit = (data: RegisterData) => { console.log(data) };
    const onError = (errors: Object) => { console.log(errors) };
    const navigation = useNavigation();

    return (
        <Container>
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
                                onChangeText={(value) => onChange(value)}
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
                    <InputLabel>Telefone</InputLabel>
                    <Controller
                        control={control}
                        render={(props) => (
                            <Input
                                autoCompleteType='tel'
                                autoCorrect={false}
                                keyboardType='phone-pad'
                                textContentType='telephoneNumber'
                                onBlur={props.onBlur}
                                onChangeText={(value) => props.onChange(value)}
                                value={props.value}
                            />
                        )}
                        rules={{ required: 'O telefone é obrigatório.' }}
                        name='phoneNumber'
                        defaultValue=''
                    />
                    {errors.phoneNumber && <Text style={{ color: 'red' }}>{errors.phoneNumber.message}</Text>}
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
                                onChangeText={(value) => props.onChange(value)}
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