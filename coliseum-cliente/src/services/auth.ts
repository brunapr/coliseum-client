import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext } from 'react';
import { Data } from '../pages/EventDetails/styles';

export var isLoggedIn = false;

interface Data {
    token: string;
    setToken: any;
    signed: boolean;
}

const AuthContext = createContext<Data>({} as Data);

export default AuthContext;

var Auth = '';

export const user_token = async () => {
    const token = await AsyncStorage.getItem('token');
    if(token) {
        Auth = 'Bearer '.concat(token);
    } else {
        Auth = "";
        console.log('Não foi possível achar o token.')
    }
    return Auth;
};

export function checkIsLoggedIn() {
    if(Auth != ""){
        isLoggedIn = true;
    } else {
        isLoggedIn = false;
    }
    return isLoggedIn;
}