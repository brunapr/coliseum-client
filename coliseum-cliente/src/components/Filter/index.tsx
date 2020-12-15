import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { Container, TitleBox, Title, FilterBox, GoFilter, FilterText, ButtonText } from './styles';

export default function Filter(props:any) {

    return(
        <Container>
            <TitleBox>
                <Title>Filtrar</Title>
            </TitleBox>

                <FilterBox>
                <RadioButton
                    value="first"
                    color="#32CFE3"
                    status={ props.parentChange === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => props.filterChange('first')}
                />
                    <FilterText>Procure pelo nome</FilterText>
                </FilterBox>
                <FilterBox>
                <RadioButton
                    value="second"
                    color="#32CFE3"
                    status={ props.parentChange === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => props.filterChange('second')}
                />
                {console.log(props.parentChange)}
                {console.log("CONSOLE LOG DO COMPONENTE EM CIMA")}
                    <FilterText>Procure pelo bairro</FilterText>
                </FilterBox>

            <GoFilter onPress={() => props.filterClose(false)}>
                <ButtonText>OK!</ButtonText>
            </GoFilter>
        </Container>
    );
}