import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function EventDetails() {
    return(
        <View>
            {/* foto e data */}
            <View>
                {/* foto */}
                <View/>
                {/* data */}
                <View>
                    {/* caixa da data */}
                    <View>
                        <Text>21</Text>
                        <Text>Abr</Text>
                    </View>
                    {/* nome e endereço */}
                    <View>
                        <Text>Festival de Música</Text>
                        <Text>Rua dos inteligentes, 102 - VV</Text>
                    </View>
                    {/* caixinha de comentario */}
                    <View/>
                </View>
            </View>

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
                    <Text>Horário</Text>
                    <Text>De 18h às 21h</Text>
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