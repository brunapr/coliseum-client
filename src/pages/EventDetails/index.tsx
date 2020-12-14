import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BiCommentDetail } from "react-icons/bi";


import { Photo, Header, MainInfo, DataBox, MainData, Data, Month, EventTitle, EventAddress } from './styles';

// import { Container } from './styles';

export default function EventDetails() {
    return(
        <View>
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
                            <Data>21</Data>
                            <Month>Abr</Month>
                        </DataBox>
                        {/* nome e endereço */}
                        <View style={{width:'80%'}}>
                            <EventTitle>Festival de Música</EventTitle>
                            <EventAddress>Rua dos Inteligentes, 8453 - Madureira, próximo ao Shopping</EventAddress>
                        </View>
                    </MainData>
                    {/* caixinha de comentario */}
                    <BiCommentDetail style={{zIndex: 1, marginRight: "5%"}} color="#fff" size={24}/>
                </MainInfo>
            </Header>

            {/* view da parte de cima dos detalhes */}
            <View>
                {/* bloco dos confirmados */}
                <View>
                    <View/>
                    <Text>2.011 confirmados</Text>
                </View>

                {/* botão para participar do evento */}
                <View>
                    <Text>Participar</Text>
                </View>
            </View>
            
            {/* detalhes do evento */}
            <View>
                <Text>Detalhes do evento</Text>

                <View>
                    <Text>Criado por</Text>
                    <Text>Fulano Fulano</Text>
                </View>

                <View>
                    <Text>Data e Hora</Text>
                    <Text>21.04.2021 | 18h às 21h</Text>
                </View>

                <View>
                    <Text>Preço</Text>
                    <Text>Evento Gratúito</Text>
                </View>

                <View>
                    <Text>Descrição</Text>
                    <Text>È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile.</Text>
                </View>
            </View>
        </View>
    );
}