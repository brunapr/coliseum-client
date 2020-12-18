import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BiCommentDetail, BiGroup } from "react-icons/bi";
import { FaChevronCircleLeft } from 'react-icons/fa';

import { Container, Photo, Header, MainInfo, DataBox, MainData, Data, Month, EventTitle, EventAddress, FollowEventContainer, PeopleFollowing, FollowingNumber, FollowButton, FollowButtonClicked, ButtonText, ButtonTextClicked, AllDetails, AllDetailsTitle, DetailsContainer, DetailData, DetailType, BackIcon } from './styles';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

interface EventData {
    name: string,
    description: string,
    price: number,
    date: string,
    starts_at: string,
    city: string,
    neighborhood: string,
    street: string,
    number: string,
}

export default function EventDetails() {

    const [ buttonClicked, setButtonClicked ] = useState(false);
    const navigation = useNavigation();

    const [ eventDetails, setEventDetails ] = useState<EventData>();
    const [ event_id, setEventId ] = useState(3); //preciso depois passar o id pela home, precisa ser recebido antes de mandar pra useeffect

    useEffect(() => {
        api.get(`api/event/${event_id}`).then( response => {
            setEventDetails(response.data)
        })
    }, [event_id])

    if (!eventDetails) {
        return <Container style={{marginTop: '50%'}}><Text style={{color: '#FF4D00'}}>Carregando...</Text></Container>;
    }
    
    return(
        <Container>
            <BackIcon onPress={() => {navigation.navigate('Home'); document.location.reload(true);}}>
                <FaChevronCircleLeft size={36} color={'#32CFE3'}/>
            </BackIcon>
            {/* foto e data */}
            <Header>
                {/* foto */}
                <Photo/>
                {/* data */}
                <MainInfo>
                    <LinearGradient
                        colors={['#FF4D00', '#FF9345']}
                        start={[0,1]}
                        end={[1,0]}
                        style={{
                        position: 'absolute',
                        width: "100%",
                        height: "100%",
                        borderTopRightRadius: 30,
                        borderTopLeftRadius: 30,
                        }}
                    />
                    {/* caixa da data */}
                    <MainData>
                        <DataBox>
                            {/* integrar essa parte */}
                            <Data>21</Data>
                            <Month>Abr</Month>
                        </DataBox>
                        {/* nome e endereço */}
                        <View style={{width:'80%', height:'12vw'}}>
                            <EventTitle>{eventDetails.name}</EventTitle>
                            <EventAddress>{eventDetails.street} {eventDetails.number}, {eventDetails.neighborhood} - {eventDetails.city}</EventAddress>
                        </View>
                    </MainData>
                    {/* caixinha de comentario */}
                    <BiCommentDetail style={{zIndex: 1, marginRight: "7.5%"}} color="#fff" size={24}/>
                </MainInfo>
            </Header>

            {/* view da parte de cima dos detalhes */}
            <FollowEventContainer>
                {/* bloco dos confirmados */}
                <PeopleFollowing>
                    <BiGroup size={24} color={'#32CFE3'}/>
                    <FollowingNumber>2.011 confirmados</FollowingNumber>
                </PeopleFollowing>

                {/* botão para participar do evento */}
                <View style={{width: '35%'}}>
                    { !buttonClicked ?
                    <FollowButton onPress={() => setButtonClicked(true)}><ButtonText>Participar</ButtonText></FollowButton>
                    : <FollowButtonClicked onPress={() => setButtonClicked(false)}><ButtonTextClicked>Participando</ButtonTextClicked></FollowButtonClicked>
                    }
                </View>
            </FollowEventContainer>
            
            {/* detalhes do evento */}
            <AllDetails>
                <AllDetailsTitle>Detalhes do evento</AllDetailsTitle>

                <DetailsContainer>
                    {/* integrar essa parte depois */}
                    <DetailType>Criado por</DetailType>
                    <DetailData>Fulano Fulano</DetailData>
                </DetailsContainer>

                <DetailsContainer>
                    <DetailType>Data e Hora</DetailType>
                    <DetailData>{eventDetails.date} | {eventDetails.starts_at}</DetailData>
                </DetailsContainer>

                <DetailsContainer>
                    <DetailType>Preço</DetailType>
                    <DetailData>R${eventDetails.price}</DetailData>
                </DetailsContainer>

                <DetailsContainer>
                    <DetailType>Descrição</DetailType>
                    <DetailData>{eventDetails.description}</DetailData>
                </DetailsContainer>
            </AllDetails>
        </Container>
    );
}