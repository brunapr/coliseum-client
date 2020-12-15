import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BiCommentDetail, BiGroup } from "react-icons/bi";
import { FaChevronCircleLeft } from 'react-icons/fa';


import { Container, BackIcon, Photo, Header, MainInfo, DataBox, MainData, Data, Month, EventTitle, EventAddress, FollowEventContainer, PeopleFollowing, FollowingNumber, FollowButton, FollowButtonClicked, ButtonText, ButtonTextClicked, AllDetails, AllDetailsTitle, DetailsContainer, DetailData, DetailType } from './styles';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

export default function EventDetails() {

    const [ buttonClicked, setButtonClicked ] = useState(false);
    const navigation = useNavigation();
    
    return(
        <Container>
            {/* foto e data */}
            <Header>
                <BackIcon onPress={() => navigation.navigate('Home')}>
                    <FaChevronCircleLeft size={36} color={'#32CFE3'}/>
                </BackIcon>
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
                            <Data>21</Data>
                            <Month>Abr</Month>
                        </DataBox>
                        {/* nome e endereço */}
                        <View style={{width:'80%', height:'12vw'}}>
                            <EventTitle>Festival de Música</EventTitle>
                            <EventAddress>Rua dos Inteligentes, 98345 - Madureira, Próximo ao Shopping</EventAddress>
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
                    <DetailType>Criado por</DetailType>
                    <DetailData>Fulano Fulano</DetailData>
                </DetailsContainer>

                <DetailsContainer>
                    <DetailType>Data e Hora</DetailType>
                    <DetailData>21 • 04 • 2021 | 18h às 21h</DetailData>
                </DetailsContainer>

                <DetailsContainer>
                    <DetailType>Preço</DetailType>
                    <DetailData>Evento Gratúito</DetailData>
                </DetailsContainer>

                <DetailsContainer>
                    <DetailType>Descrição</DetailType>
                    <DetailData>È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile.</DetailData>
                </DetailsContainer>
            </AllDetails>
        </Container>
    );
}