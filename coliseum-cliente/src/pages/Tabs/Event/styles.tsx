import styled from 'styled-components/native';

export const Content = styled.View `
    width: 100%;
    height: 100%;
  
`;

export const Header = styled.View `
    width: 100%;
    height: 35%;

    display: flex;
    flex-direction: row;
    margin-bottom:3%;
    
`;

export const Body = styled.ScrollView `
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    
`;

export const CurrentContainer = styled.View `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
`;

export const PreviusContainer = styled.View `
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    
`;

export const DivButtons = styled.View `
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;

    color: black;
    
`;

export const Title = styled.Text `
    color: #FF4D00;
    text-align: center;
    font-size: 18px;
`;

export const SubTitle = styled.Text `
    font-weight: bold;
    font-style: italic;
    opacity: 0.;
    width: 50%;
`;

export const ButtonUnable = styled.TouchableOpacity `
    width: 50%;
    height: 100%;
    background-color: #F2F2F2;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom-width: 2px;
    border-bottom-color: grey;

`;

export const ButtonAble = styled.TouchableOpacity `
    width: 50%;
    height: 100%;
    background-color: #ffd7b5;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom-width: 2px;
    border-bottom-color: #FF4D00;
`;

export const ButtonDelete = styled.TouchableOpacity `
    width: 10%;
    height: 22%;
    background-color: #32CFE3;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;



export const ButtonText = styled.Text `
    font-size: 18px;
    color: #FF4D00;
`;


