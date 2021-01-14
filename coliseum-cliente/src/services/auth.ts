import AsyncStorage from '@react-native-async-storage/async-storage';

var Auth = "";
var isLoggedIn = false;

export const user_token = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        if(token){
            Auth = 'Bearer '.concat(token);
        } 
    } catch(e) {
        console.log('Não foi possível achar o token.')
    }
    return Auth;
};

export function checkIsLoggedIn() {
    if(Auth != ""){
        isLoggedIn = true;
    }
    return isLoggedIn;
}