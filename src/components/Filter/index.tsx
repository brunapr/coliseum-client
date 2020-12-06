import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { Container, TitleBox, Title, FilterBox, GoFilter, FilterText, ButtonText } from './styles';

export default function Filter() {
    const [checked, setChecked] = useState('first');

    return(
        <Container>
            <TitleBox>
                <Title>Filtrar</Title>
            </TitleBox>

                <FilterBox>
                <RadioButton
                    value="first"
                    color="#32CFE3"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('first')}
                />
                    <FilterText>Procure pelo nome</FilterText>
                </FilterBox>
                <FilterBox>
                <RadioButton
                    value="second"
                    color="#32CFE3"
                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('second')}
                />
                    <FilterText>Procure pelo bairro</FilterText>
                </FilterBox>

            <GoFilter>
                <ButtonText>OK!</ButtonText>
            </GoFilter>
        </Container>
    );
}