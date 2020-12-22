import React from 'react';

import { Container, PhoneContainer, PhoneText, Square } from './styles';

export default function Phone(props:any) {
    return(
        <Container>
            <Square/>
            <PhoneContainer>
                <PhoneText>{props.phone}</PhoneText>
            </PhoneContainer>
        </Container>
    );
}