import styled from 'styled-components/native';

export const Container = styled.View `
    width: 100%;
    height: 100%;

    background-color: #F2F2F2;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CloseIcon = styled.TouchableOpacity `
    position: absolute;
    right: 7.5%;
    top: 5%;
    z-index: 1;
`;

export const Content = styled.View `
    width: 90%;
    margin-top: 30%;
`;

export const Input = styled.TextInput `
    width: 100%;
    height: 70%;
    padding: 4%;
    padding-left: 8%;
    background: #FFFFFF;
    opacity: 0.7;

    border: 1px solid #FFFFFF;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
`;

export const SendButton = styled.TouchableOpacity `
    background-color: #069DB1;
    padding: 4%;
    border-radius: 50px;
    margin-top: 15%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SendText = styled.Text `
    color: white;
    font-weight: bold;
    font-size: 20px;
`;

export const Title = styled.Text `
    font-size: 22px;
    font-style: italic;
    font-weight: bold;
    opacity: 0.5;
    margin-bottom: 5%;
    text-align: center;
`;
