var Auth = "";
var isLoggedIn = false;

export const user_token = () => {
    const token = localStorage.getItem('token');

    if(token){
        Auth = 'Bearer '.concat(token);
    } 
    return Auth;
}

export function checkIsLoggedIn() {
    if(Auth != ""){
        isLoggedIn = true;
    }
    return isLoggedIn;
}