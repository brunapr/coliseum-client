import styled from 'styled-components/native';

export const Content = styled.View `
    width: 100%;
    height: 100%;
`;

export const Header = styled.View `
    width: 100%;
    height: 18%;
    display: flex;
    margin-top: 0%;
    margin-bottom: 10%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const Body = styled.View `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const DivTitle = styled.View `
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding:10%;
   
`;


export const Scroll = styled.View `
    width: 100%;
    height: 100%;
    margin-left: 2%;
    margin-right: 5%;
    margin-top: 5%;
`;

export const ScrollPopular = styled.View `
    width: 100%;
    height: 30%;
    margin-left: 2%;
    margin-right: 5%;
    margin-top: 5%;

    display: flex;
    flex-direction: row;
`;


export const Title = styled.Text `
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
`;


export const SubTitle = styled.Text `
    font-weight: bold;
    font-size: 24px;
    opacity: 0.5;
    width: 100%;
    margin-left: 5%;
`;