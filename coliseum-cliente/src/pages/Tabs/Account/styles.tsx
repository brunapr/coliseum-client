import styled from 'styled-components/native';

export const Content = styled.View `
    width: 100%;
    height: 100%;
    padding-left: 8%;
    padding-right: 8%;
`;

export const Header = styled.View `
    width: 100%;
    height: auto;
    display: flex;
    margin-top: 15%;
    margin-bottom: 10%;
    flex-direction: column;
`;

export const Title = styled.Text `
    color: #FF4D00;
    text-align: center;
    font-size: 20px;
`;

export const SubTitle = styled.Text `
    font-weight: bold;
    font-style: italic;
    opacity: 0.5;
    width: 100%;
    text-align: center;
`;

export const Form = styled.View `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormBox = styled.View `
    width: 100%;
    margin-bottom: 5%;
`;

export const ButtonsContainer = styled.View `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const SubmitButton = styled.TouchableOpacity `
    width: 55%;
    height: 25%;
    padding: 1%;
    border-radius: 50px;
    background: rgb(6,157,177);
    margin-top: 5%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LogoutBox = styled.TouchableOpacity `
    width: 40%;
    height: 25%;
    padding: 1%;
    border-radius: 50px;
    background: red;
    margin-top: 5%;
    margin-bottom: 5%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SubmitButtonText = styled.Text `
    font-size: 16px;
    color: #fff;
`;