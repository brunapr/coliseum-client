import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';
import { BiCommentDetail, BiGroup } from "react-icons/bi";
import { FaChevronCircleLeft, FaInfoCircle } from 'react-icons/fa';

import { Container, Photo, Header, MainInfo, DataBox, MainData, Data, Month, EventTitle, EventAddress, FollowEventContainer, PeopleFollowing, FollowingNumber, FollowButton, FollowButtonClicked, ButtonText, ButtonTextClicked, AllDetails, AllDetailsTitle, DetailsContainer, DetailData, DetailType, BackIcon, PromoterContainer, InfoButton } from './styles';
import { useNavigation } from '@react-navigation/native';

import Phone from '../../components/PromoterPhone/index';

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
    participants: number,
}

export default function EventDetails() {

    const [ buttonClicked, setButtonClicked ] = useState(false);
    const [ infoClicked, setInfoClicked ] = useState(false);

    // nao vai precisar desses dois de baixo depois pq os dois ids vao vir direto 
    // entao soh teria que chamar como props.event_id e props.user_id
    const [ event_id, setEventId ] = useState(1); //preciso depois passar o id pela home, precisa ser recebido antes de mandar pra useeffect
    const [ user_id , setUserId ] = useState(1); //seta o userId uma vez que o phone do promoter nao vem na resposta

    const [ eventDetails, setEventDetails ] = useState<EventData>();
    const [ promoterPhone, setPromoterPhone ] = useState();
    const [ promoterName, setPromoterName ] = useState();

    const navigation = useNavigation();

    useEffect(() => {
        api.get(`api/event/${event_id}`).then( response => {
            setEventDetails(response.data)
            setPromoterName(response.data.user.name)
        })

        api.get(`api/user/${user_id}`).then( response => {
            setPromoterPhone(response.data.promoter.phone)
        })
    }, [event_id])

    if (!eventDetails) {
        return <Container style={{marginTop: '50%'}}><Text style={{color: '#FF4D00', fontSize: 24}}>Carregando...</Text></Container>;
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
                    <FollowingNumber>{eventDetails.participants} confirmados</FollowingNumber>
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
                    <PromoterContainer>
                        <DetailData>{promoterName} </DetailData> 
                        <InfoButton onPress={() => setInfoClicked(!infoClicked)}>
                            <FaInfoCircle size={20}/>
                        </InfoButton>
                        { infoClicked && <Phone phone={promoterPhone}/> }
                    </PromoterContainer>
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