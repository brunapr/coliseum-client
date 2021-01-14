import styled from 'styled-components/native';
import eventImage from '../../../assets/Event.png';

export const Card = styled.View `
    background: white;

    width: 44%;
    height: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 2%;
    margin-left: 4%;

    border-radius:30px;
`;

export const DivImage = styled.View `
    
    background-image: url(${eventImage});
    background-size: cover;
    background-repeat: no-repeat;

    width: 100%;
    height: 65%;

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
    justify-content: flex-start;

    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
   
    
`;

export const DivEventInformation = styled.View `
  
    width: 100%;
    height: 50%;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
      
`;


export const DivEventName = styled.View `
  
    width: 70%;
    height: 100%;
    margin-left: 5%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    
`;

export const DivEventDate = styled.View `
  
    width: 25%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
      
`;

export const DivEventAddress = styled.View `
  
    width: 95%;
    height: 50%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
      
`;

export const EventName = styled.Text `
    color: black;
    text-align: center;
    font-size: 16px;
    font-weight: bold;

    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap;
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
    font-size: 18px;
    
`;

