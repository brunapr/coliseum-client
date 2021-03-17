import styled from 'styled-components/native';

export const Card = styled.View `
    background: white;

    width: 78%;
    height: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 2%;
    margin-left: 10%;

    border-radius:30px;
`;

export const DivImage = styled.View `

    width: 100%;
    height: 25%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
   
`;

export const DivEventDetails = styled.View `
  
    width: 100%;
    height: 35%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
   
    
`;

export const DivEventInformation = styled.View `
  
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
      
`;


export const DivEventName = styled.View `

    width: 75%;
    height: 100%;
    margin-left: 5%;
    
    display: flex;
    flex-direction: row;
`;

export const DivEventDate = styled.View `
  
    width: 15%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
      
`;

export const DivEventAddress = styled.View `
  
    width: 95%;

    display: flex;
    flex-direction: row;
    margin-left: 5%;

    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
      
`;

export const EventName = styled.Text `
    color: black;
    font-size: 14px;
    font-weight: bold;

`;

export const EventDate = styled.Text `
    color: black;
    text-align: center;
    font-size: 12px;
    font-style: italic;
    
`;

export const EventAddress = styled.Text `
    color: grey;
    font-size: 14px;
    
`;

export const TouchableCard = styled.TouchableOpacity `
    height: 220px;
    width: 350px;
    
`;

