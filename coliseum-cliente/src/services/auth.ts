import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, createContext } from 'react';

var AuthContext = createContext({auth: false, setAuth: (newAuth:boolean) => {return newAuth}});
export const useAuth = () => useContext(AuthContext);

var Auth = "";
export var isLoggedIn = false;

export const user_token = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        if(token){
            Auth = 'Bearer '.concat(token);
        } 
    } catch(e) {
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
