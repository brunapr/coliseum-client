import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Container, CloseIcon, Content, Input, SendButton, SendText, Title, InputBox } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import { user_token } from '../../services/auth';
import { useForm, Controller } from 'react-hook-form';

interface FormData {
    commentary: string;
    event_id: any;
}

export default function CreateCommentary(props:any) {

    const { control, handleSubmit, errors } = useForm({ mode: 'onTouched' });
    const [ authorization, setAuthorization ] = useState("");
    const [ userName, setUserName ] = useState();

    useEffect(() => {
        console.log(authorization)
        api.get("api/getDetails", { headers: { Authorization: authorization } }).then( response => {
            setUserName(response.data.name);
        });
    }, [authorization])

    user_token().then(value => {
        setAuthorization(value);
    });

    const onSubmit = (data: FormData) => { 
        console.log(data)
        data.event_id = props.event_id;
        console.log(data.event_id)
        api.post('api/commentary', data, { headers: { Authorization: authorization } }).then(response => {
            alert('Comentário postado com sucesso!');
            props.commentaryClose(false);
        }, 
        (error => alert('Comentário não pode ser postado.'))
        )};
        
    const onError = (errors: Object) => { console.log(errors) };
    
    return(
        <Container>
            <CloseIcon onPress={() => props.commentaryClose(false)}>
                <Icon name="x-circle" size={36} color="#32CFE3" />
            </CloseIcon>
            
            <Content>
                <InputBox>
                    <Title>Você está postando como {userName}</Title>
                    <Controller
                        control={control}
                        render={(props) => (
                            <Input
                                placeholder="Escreva seu comentário aqui!"
                                autoCorrect={false}
                                multiline
                                numberOfLines={20}
                                onBlur={props.onBlur}
                                onChangeText={(value:any) => props.onChange(value)}
                                value={props.value}
                            />
                        )}
                        rules={{
                            required: 'O campo de comentário não pode ficar em branco.',
                        }}
                        name='commentary'
                        defaultValue=''
                    />
                    {errors.commentary && <Text style={{ color: 'red' }}>{errors.commentary.message}</Text>}
                    
                    <SendButton onPress={handleSubmit(onSubmit, onError)}>
                        <SendText>ENVIAR</SendText>
                    </SendButton>
                </InputBox>
            </Content>
        </Container>
    );
}