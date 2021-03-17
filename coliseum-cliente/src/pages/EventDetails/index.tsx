import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Header, MainInfo, DataBox, MainData, Data, Month, EventTitle, EventAddress, FollowEventContainer, PeopleFollowing, FollowingNumber, FollowButton, FollowButtonClicked, ButtonText, ButtonTextClicked, AllDetails, AllDetailsTitle, DetailsContainer, DetailData, DetailType, BackIcon, PromoterContainer, InfoButton } from './styles';
import { useNavigation } from '@react-navigation/native';

import Phone from '../../components/PromoterPhone/index';
import img from '../../../assets/unnamed.jpg';
import AuthContext from '../../services/auth';
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

export default function EventDetails(props:any) {

    const Auth = useContext(AuthContext);

    const event_id = props.route.params.id;
    const [ buttonClicked, setButtonClicked ] = useState(false);
    const [ infoClicked, setInfoClicked ] = useState(false);

    const [ user_id , setUserId ] = useState(); 
    const [ eventDetails, setEventDetails ] = useState<EventData>();
    const [ promoterPhone, setPromoterPhone ] = useState();
    const [ promoterName, setPromoterName ] = useState();

    const noAccountAlert = () => 
        Alert.alert(
            "Atenção!",
            "Você não está logado, portando, não pode fazer isso. Gostaria de entrar com uma conta?",
            [
                {
                    text: "Não",
                    onPress: () => console.log("Não"),
                    style: "cancel"
                },
                { text: "Sim", onPress: () => navigation.navigate('Login') }
            ]
    );

    function handleNavigateToComments(id: number) {
        if (Auth.token == "" || Auth.token == undefined) {
            noAccountAlert();
        } else {
            navigation.navigate('Comments', { id });
        }
    }

    const navigation = useNavigation();

    function participate(id:any){
        if (Auth.token == "" || Auth.token == undefined) {
            noAccountAlert();
        } else {
            api.get(`api/participate/event/${id}`, { headers: { Authorization: Auth.token } }).then( response => {
                setButtonClicked(true)
            }, (error => {
                setButtonClicked(false)
                alert("Parece que tivemos um problema. Tente mais tarde.")
            }))
        }
    }

    function stopParticipate(id:any){
        api.get(`api/block/event/${id}`, { headers: { Authorization: Auth.token } }).then( response => {
            try{
                setButtonClicked(false)
            } catch{
                setButtonClicked(true)
                alert("Parece que tivemos um problema. Tente mais tarde.")
            }
        }) 
    }

    useEffect(() => {
        api.get(`api/event/${event_id}`).then( response => {
            setEventDetails(response.data)
            setPromoterName(response.data.user.name)
            setUserId(response.data.user_id)
        })
    }, [event_id])

    useEffect(() => {
        api.get(`api/user/${user_id}`).then( response => {
            console.log(response.data)
            setPromoterPhone(response.data.promoter.phone)
        })
    }, [user_id])

    if (!eventDetails) {
        return <Container style={{marginTop: '50%'}}><Text style={{color: '#FF4D00', fontSize: 24}}>Carregando...</Text></Container>;
    }
    
    return(
        <Container>
            <BackIcon onPress={() => {navigation.navigate('Home')}}>
                <Icon name="arrow-left-circle" size={36} color="#32CFE3" />
            </BackIcon>

            <Header>

                <Image
                    source={img}
                    style={{width: '100%', height: '100%'}}
                    resizeMode="cover"
                />
               
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
                
                    <MainData>
                        <DataBox>
                          
                            <Data>21</Data>
                            <Month>Abr</Month>
                        </DataBox>
                        {/* nome e endereço */}
                        <View style={{width:'80%', height:'12%'}}>
                            <EventTitle>{eventDetails.name}</EventTitle>
                            <EventAddress>{eventDetails.street} {eventDetails.number}, {eventDetails.neighborhood} - {eventDetails.city}</EventAddress>
                        </View>
                    </MainData>
                  
                    <Icon onPress={() => handleNavigateToComments(event_id)} name="message-square" size={24} color="#fff" style={{zIndex: 1, marginRight: "7.5%"}}/>
                </MainInfo>
            </Header>

           
            <FollowEventContainer>
              
                <PeopleFollowing>
                    <Icon name="users" size={24} color="#32CFE3"/>
                    <FollowingNumber>{eventDetails.participants} confirmados</FollowingNumber>
                </PeopleFollowing>

             
                <View style={{width: '35%'}}>
                    { !buttonClicked ?
                    <FollowButton onPress={() => {participate(event_id)}}><ButtonText>Participar</ButtonText></FollowButton>
                    : <FollowButtonClicked onPress={() => stopParticipate(event_id)}><ButtonTextClicked>Participando</ButtonTextClicked></FollowButtonClicked>
                    }
                </View>
            </FollowEventContainer>
            
         
            <AllDetails>
                <AllDetailsTitle>Detalhes do evento</AllDetailsTitle>

                <DetailsContainer>
                  
                    <PromoterContainer>
                        <DetailType>Criado por </DetailType>
                        <InfoButton onPress={() => setInfoClicked(!infoClicked)}>
                                <Icon name="info" size={20} color="#000"/>
                        </InfoButton>
                        { infoClicked && <Phone phone={promoterPhone}/> }
                    </PromoterContainer>
                    <DetailData>{promoterName} </DetailData> 
                </DetailsContainer>

                <DetailsContainer>
                    <DetailType>Data e Hora</DetailType>
                    <DetailData>{eventDetails.date} | {eventDetails.starts_at}h</DetailData>
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