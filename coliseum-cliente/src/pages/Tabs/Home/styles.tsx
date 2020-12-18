import styled from 'styled-components/native';

export const Content = styled.View `
    width: 100vw;
    height: 90vh;
    padding: 0%;
`;

export const Header = styled.View `
    width: 100vw;
    height: 20vh;
    display: flex;
    margin-top: 0%;
    margin-bottom: 10%;
    flex-direction: column;
`;

export const Body = styled.View `
    width: 100vw;
    height: 80vh;
    display: flex;
    margin-top: 0%;
    margin-bottom: 10%;
    flex-direction: column;
`;

export const DivTitle = styled.View `
    width: 100vw;
    height: 20vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding:10%;
   
`;


export const Scroll = styled.ScrollView `
    width: 100vw;
    height: 90%;
    margin-left: 2%;
`;


export const Title = styled.Text `
    color: white;
    text-align: center;
    font-size: 1.6em;
    font-weight: bold;
`;

export const p = styled.Text `
    color: black;
    text-align: start;
    font-size: 1em;
    font-weight: bold;
`;


export const SubTitle = styled.Text `
    font-weight: bold;
    font-size: 1.2em;
    opacity: 0.5;
    width: 50%;
    margin-left: 5%;
`;