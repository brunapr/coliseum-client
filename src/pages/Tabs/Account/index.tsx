import * as WebBrowser from 'expo-web-browser';
import React from 'react';

import { View, Text, Button, TextInput, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { InputLabel, Input } from '../../styles';
import { Header, Title, SubTitle, Content, SubmitButton, Form, FormBox } from './styles';
import { useState } from 'react';

Account.navigationOptions = {
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

export default function Account() {

    const { control, getValues, handleSubmit, errors } = useForm({ mode: 'onTouched' });
    const onSubmit = (data: EditData) => { console.log(data) };
    const onError = (errors: Object) => { console.log(errors) };

    const [editPassword, setEditPassword] = useState(false);

    return(
        <Content>
            <ScrollView>
                <Header>
                    <Title>Minha Conta</Title>
                    <SubTitle>Veja ou altere os dados de sua conta</SubTitle>
                </Header>

                <Form>
                    <FormBox>
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
                            name='name'
                            defaultValue=''
                        />
                        {errors.name && <Text style={{ color: 'red' }}>{errors.name.message}</Text>}
                    </FormBox>

                    <FormBox>
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
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Formato de e-mail inválido.'
                                },
                            }}
                            name='email'
                            defaultValue=''
                        />
                        {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}
                    </FormBox>

                    <FormBox>
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
                            name='phoneNumber'
                            defaultValue=''
                        />
                        {errors.phoneNumber && <Text style={{ color: 'red' }}>{errors.phoneNumber.message}</Text>}
                    </FormBox>

                    <FormBox>
                        <InputLabel>Senha</InputLabel>
                        <Controller
                            control={control}
                            render={(props) => (
                                <Input
                                    placeholder={ editPassword ? "Digite sua senha atual" : "**********"}
                                    secureTextEntry
                                    autoCompleteType='password'
                                    autoCorrect={false}
                                    textContentType='newPassword'
                                    onBlur={props.onBlur}
                                    onFocus={() => setEditPassword(!editPassword)}
                                    onChangeText={(value) => props.onChange(value)}
                                    value={props.value}
                                />
                            )}
                            name='password'
                            defaultValue=''
                        />
                        {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}
                    </FormBox>
                            
                    { editPassword &&
                    <Form>
                        <FormBox>
                        <Controller
                            control={control}
                            render={(props) => (
                                <Input
                                    placeholder="Digite a nova senha"
                                    secureTextEntry
                                    autoCompleteType='password'
                                    autoCorrect={false}
                                    textContentType='password'
                                    onBlur={props.onBlur}
                                    onChangeText={(value) => props.onChange(value)}
                                    value={props.value}
                                />
                            )}
                            rules={{required: 'Digite a nova senha'}}
                            name='newPassword'
                            defaultValue=''
                        />
                        {errors.newPassword && <Text style={{ color: 'red' }}>{errors.newPassword.message}</Text>}
                    </FormBox>

                        <FormBox>

                        <Controller
                            control={control}
                            render={(props) => (
                                <Input
                                    placeholder="Confirme a nova senha"
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
                                        const { newPassword } = getValues();
                                        return newPassword === value || 'As senhas não coincidem.';
                                    }
                                }
                            }}
                            name='passwordConfirmation'
                            defaultValue=''
                        />
                        {errors.passwordConfirmation && <Text style={{ color: 'red' }}>{errors.passwordConfirmation.message}</Text>}
                    </FormBox>
                    </Form>
                    }
                    <SubmitButton> 
                        <Button color="transparent" title='Salvar Alterações' onPress={handleSubmit(onSubmit, onError)} />
                    </SubmitButton>
                </Form>
            </ScrollView>
        </Content>
    );
}