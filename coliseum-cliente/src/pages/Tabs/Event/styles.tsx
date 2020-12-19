import styled from 'styled-components/native';

export const Content = styled.View `
    width: 100%;
    height: 100vh;
  
`;

export const Header = styled.View `
    width: 100%;
    height: 15vh;

    display: flex;
    flex-direction: row;
    
`;

export const DivButtons = styled.View `
    width: 100%;
    height: 15vh;

    display: flex;
    flex-direction: row;

    border: 2px solid blue;

    color: black;
    
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
    width: 50%;
`;

