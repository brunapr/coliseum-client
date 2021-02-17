import React, { useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';

export default function LoginNavigate() {
    const navigation = useNavigation();
    const [ location, setLocation ] = useState(true);

    function navigate() {
        navigation.navigate('Login')
    }

    useFocusEffect(() =>{
        navigate();
    });

    return(
        <View>
            <Text>Carregando...</Text>
        </View>
    );
}; 
