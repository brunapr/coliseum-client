import styled from 'styled-components/native';

export const SubmitButton = styled.TouchableOpacity `
    width: 60%;
    padding: 2%;
    border-radius: 50px;
    background: #FF4D00;

    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Input = styled.TextInput `
    width: 100%;
    padding: 3%;
    padding-left: 5%;
    background-color: #fff;
    border-radius: 100px; 
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const SubmitButtonText = styled.Text `
    color: #fff;
    font-weight: bold;
`;