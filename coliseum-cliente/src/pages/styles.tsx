import styled from 'styled-components/native';

export const Container = styled.View `
    width: 100%;
    height: 100%;
    margin-top: 10%;
    background-color: #f2f2f2;
`;

export const Content = styled.View `
    width: 100%;
    padding: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text `
    color: #FF4D00;
    font-size: 30px;
    font-style: italic;
    text-align: center;
    margin-bottom: 10%;
`;

export const InputBox = styled.View `
    width: 100%;
    margin-bottom: 5%;
`;

export const InputLabel = styled.Text `
    font-size: 18px;
    margin-bottom: 2%;
    font-weight: 500;
`;

export const Input = styled.TextInput `
    width: 100%;
    padding: 2%;
    padding-left: 5%;
    background-color: #fff;
    border-radius: 100px; 
`;

export const BackIcon = styled.TouchableOpacity `
    position: absolute;
    left: 7.5%;
    top: 7.5%;
    z-index: 1;
`;