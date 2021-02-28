import styled from 'styled-components/native';

export const Card = styled.View `
    background: white;

    width: 78%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: flex-start;

    margin-left: 10%;

    border-radius:30px;
`;


export const DivImage = styled.View `

    width: 20%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
   
`;
export const DivEventDetails = styled.View `
  
    width: 80%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    border-top-left-radius: 0px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 0px;

    padding: 1%;
    
`;

export const DivEventName = styled.View `
  
    width: 95%;
    height: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    
`;

export const DivEventDate = styled.View `
  
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
   
`;

export const DivEventAddress = styled.View `
  
    width: 100%;
    height: 50%;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;  
 
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
    text-align: center;
    font-size: 14px;
   
`;

export const TouchableCard = styled.TouchableOpacity `
    height: 25%;
    margin-bottom: 5%
`;
