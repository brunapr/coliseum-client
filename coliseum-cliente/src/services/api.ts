import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
})

const user_token = () => {
    const token = localStorage.getItem('token');
    var isLoggedIn = false;
    var Auth = "";
    
    if(token){
        Auth = 'Bearer '.concat(token);
        isLoggedIn = true;
    } 
    return Auth;
}

export default api;