import styled from 'styled-components/native';

export const Content = styled.View `
    width: 100%;
    height: 100%;
    padding: 0%;
`;

export const Header = styled.View `
    width: 100%;
    height: 20%;
    display: flex;
    margin-top: 0%;
    margin-bottom: 10%;
    flex-direction: column;
    justify-content: center;
`;

export const Body = styled.View `
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 0%;
    margin-bottom: 10%;
    flex-direction: column;
`;

export const DivTitle = styled.View `
    width: 100%;
    height: 20%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding:10%;
   
`;


export const Scroll = styled.ScrollView `
    width: 100%;
    height: 90%;
    margin-left: 2%;
    margin-right: 5%;
`;


export const Title = styled.Text `
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
`;

export const P = styled.Text `
    color: black;
    text-align: start;
    font-size: 1em;
    font-weight: bold;
`;


export const SubTitle = styled.Text `
    font-weight: bold;
    font-size: 24px;
    opacity: 0.5;
    width: 100%;
    margin-left: 5%;
`;