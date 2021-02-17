import styled from 'styled-components/native';
import img from '../../../assets/group.png';

export const Container = styled.View `
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WhiteBox = styled.View `
    width: 80%;
    height: 60%;
    background-color: rgba(255,255,255,0.5);
    border-radius: 20px;
    padding: 8%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Header = styled.View `
    width: 100%;
`;

export const Title = styled.Text `
    font-size: 36px;
    font-weight: bold;
    color: #FF4D00;
`;

export const SubTitle = styled.Text `
    font-size: 20px;
    color: #FF4D00;
    margin-bottom: 5%;
`;

export const Form = styled.View `
    width: 100%;
    height: 70%;

    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const InputBox = styled.View `
    width: 100%;
    margin-bottom: 2%;
`;

export const Input = styled.TextInput `
    width: 100%;
    padding: 4%;
    padding-left: 8%;
    background: #FFFFFF;
    opacity: 0.7;

    border: 1px solid #FFFFFF;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
`;

export const ButtonContainer = styled.View `
    width: 70%;
`;

export const LoginButton = styled.TouchableOpacity `
    background-color: #069DB1;
    padding: 4%;
    border-radius: 50px;
    margin-top: 15%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginText = styled.Text `
    color: white;
    font-weight: bold;
    font-size: 20px;
`;

export const RegisterButton = styled.TouchableOpacity `
    color: #069DB1;
    border: 3px solid #069DB1;
    padding: 4%;
    border-radius: 50px;
    margin-top: 2%;
    margin-bottom: 10%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RegisterText = styled.Text `
    color: #069DB1;
    font-weight: bold;
    font-size: 15px;
`;

export const BackIcon = styled.TouchableOpacity `
    position: absolute;
    left: 10%;
    top: 7%;
    z-index: 1;
`;