import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext } from 'react';

export var isLoggedIn = false;

interface Data {
    token: string;
    setToken: any;
    signed: boolean;
}

const AuthContext = createContext<Data>({} as Data);

export const user_token = async () => {
    let token = '';
    try {
        const value = await AsyncStorage.getItem('token');
        if(value !== null) {
            token = 'Bearer '.concat(value);
            return token;
        }
    } catch (e) {
        console.log("Sem token.")
    }
    return token;
};

export default AuthContext;