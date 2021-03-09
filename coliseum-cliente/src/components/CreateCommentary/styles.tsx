import styled from 'styled-components/native';

export const Container = styled.View `
    width: 100%;
    height: 100%;

    background-color: rgba(000,000,000,0.8);

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
    width: 85%;
    margin-top: 30%;
`;

export const Input = styled.TextInput `
    width: 100%;
    height: 75%;
    padding: 4%;
    padding-left: 8%;
    background: #FFFFFF;

    border: 1px solid #FFFFFF;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
`;

export const SendButton = styled.TouchableOpacity `
    background-color: #069DB1;
    padding: 4%;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;

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
    font-size: 14px;
    font-style: italic;
    color: white;
    padding: 0 5% 0 5%;
    margin-bottom: 4%;
    text-align: center;
`;

export const InputBox = styled.View `
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 50px;
    height: 80%;
`;
