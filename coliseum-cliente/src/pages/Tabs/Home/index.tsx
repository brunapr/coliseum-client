import React from 'react';

import { View, Text, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import { Header, Title, SubTitle, Content } from './styles';
import { useState } from 'react';

import EventDetails from '../../EventDetails/index';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return(
        <Content>
            <ScrollView>
                <Header>
                    <Title>Home</Title>
                    <SubTitle>Veja os principais eventos</SubTitle>

                </Header>
                
                <TouchableOpacity onPress={() => navigation.navigate('EventDetails')}>
                    <Text>CLICA AQUI PRA ABRIR</Text>
                </TouchableOpacity>
                    
                
            </ScrollView>
        </Content>
    );
}