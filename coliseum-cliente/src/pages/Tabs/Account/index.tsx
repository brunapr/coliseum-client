
import React, { useContext, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { View, Text, Button, ScrollView } from 'react-native';
import { InputLabel, Input } from '../../styles';
import { Header, Title, SubTitle, Content, SubmitButton, Form, FormBox, LogoutBox, SubmitButtonText, ButtonsContainer } from './styles';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import { RadioButton } from 'react-native-paper';

import api from '../../../services/api';
import { user_token, useAuth } from '../../../services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface EditData {
    name: string,
    email: string,
    birthdate: string,
    gender: string,
    password: string,
    newPassword: string,
    passwordConfirmation: string,
}

export default function Account() {

    const navigation = useNavigation();

    const { control, getValues, handleSubmit, errors } = useForm({ mode: 'onTouched' });

    //pega todos os detalhes do usuario e o id
    const [ userDetails, setUserDetails ] = useState<EditData>();
    const [ user_id, setUserId ] = useState();

    const [ authorization, setAuthorization ] = useState("");
    const isAuth = useAuth();
    console.log("oi")
    isAuth.setAuth(true) 
    console.log(isAuth.setAuth(true))

    //envia a data do form pro back alterar
    const onSubmit = (data: EditData) => { 
        console.log(data)
        api.put(`api/user/${user_id}`, data).then( response => {
            alert('Suas alterações foram salvas!')
            console.log(response)
        }) 
    };

    const onError = (errors: Object) => { console.log(errors) };

    //abre e fecha a aba de editar senha
    const [editPassword, setEditPassword] = useState(false);

    useFocusEffect(() => {
        api.get('api/getDetails', { headers: { Authorization: authorization } }).then(response => {
            setUserDetails(response.data);
            setUserId(response.data.id)
        }, (error => {
            console.log("Erro");
            navigation.navigate('Login')
        }))
    })

    user_token().then(value => {
        setAuthorization(value);
    });

    //aparecer caregamento enquanto userDetails não recebe resposta
    if (!userDetails) {
        return <Header style={{marginTop: '50%'}}><Title>Carregando...</Title></Header>;
    }

    //deslogar
    function handleLogout() {
        api.get('api/logout', { headers: { Authorization: authorization } }).then(response => {
            AsyncStorage.removeItem('token')
            setAuthorization("");
            setUserDetails(undefined);
            alert('Você foi deslogado com sucesso!')
            console.log('Você foi deslogado com sucesso!')

            navigation.navigate('Home')
        })
    }

    return(
        <Content>
            { userDetails === null ? 
                <View>
                    <Text>Carregando...</Text>
                </View> :        
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
                                    placeholder={userDetails.name}
                                    autoCompleteType='name'
                                    autoCorrect={false}
                                    textContentType='name'
                                    onBlur={onBlur}
                                    onChangeText={(value:any) => onChange(value)}
                                    value={value}
                                />
                            )}
                            name='name'
                            defaultValue={userDetails.name}
                        />
                        {errors.name && <Text style={{ color: 'red' }}>{errors.name.message}</Text>}
                    </FormBox>
                    <FormBox>
                        <InputLabel>E-mail</InputLabel>
                        <Controller
                            control={control}
                            render={(props) => (
                                <Input
                                    placeholder={userDetails.email}
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
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Formato de e-mail inválido.'
                                },
                            }}
                            name='email'
                            defaultValue={userDetails.email}
                        />
                        {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}
                    </FormBox>

                    <FormBox>
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
                                    onChangeText={(value:any) => props.onChange(value)}
                                    style={{
                                        width: '100%',
                                        padding: '3%', paddingLeft: '5%',
                                        backgroundColor: '#fff',
                                        borderRadius: 100,
                                    }}
                                />
                            )}
                            name='birthdate'
                            defaultValue={userDetails.birthdate}
                        />
                        {errors.birthdate && <Text style={{ color: 'red' }}>{errors.birthdate.message}</Text>}
                    </FormBox>

                    <FormBox>
                        <InputLabel>Gênero</InputLabel>
                        <Controller
                            control={control}
                            render={(props) => (
                                <View>
                                    <RadioButton.Group onValueChange={(value:any) => props.onChange(value)} value={props.value}>
                                        <RadioButton.Item color='#32CFE3' label="Feminino" value="feminino" />
                                        <RadioButton.Item color='#32CFE3' label="Masculino" value="masculino" />
                                        <RadioButton.Item color='#32CFE3' label="Outro" value="outro" />
                                    </RadioButton.Group>
                                </View>
                            )}
                            name='gender'
                            defaultValue={userDetails.gender}
                        />
                        {errors.gender && <Text style={{ color: 'red' }}>{errors.gender.message}</Text>}
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
                                    onChangeText={(value:any) => props.onChange(value)}
                                    value={props.value}
                                />
                            )}
                            name='password'
                            defaultValue={userDetails.password}
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
                                    onChangeText={(value:any) => props.onChange(value)}
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
                                    onChangeText={(value:any) => props.onChange(value)}
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
                    <ButtonsContainer>
                        <SubmitButton onPress={handleSubmit(onSubmit, onError)}>
                            <SubmitButtonText>Salvar Alterações</SubmitButtonText>
                        </SubmitButton>
                        <LogoutBox onPress={handleLogout}>
                            <SubmitButtonText style={{fontWeight: 'bold'}}>S A I R</SubmitButtonText>
                        </LogoutBox>
                    </ButtonsContainer>
                </Form>

            </ScrollView>
            }
        </Content>
    );
}