import styled from 'styled-components/native';
import eventImage from '../../../assets/Event.png';

export const Card = styled.View `
    background: white;
    width: 78vw;
    height: 27vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3%;
    margin-left: 5%;
    margin-right: 6%;
    margin-bottom: 3%;
    border-radius:30px;
`;

export const DivImage = styled.View `
    
    background-image: url(${eventImage});
    background-size: cover;
    background-repeat: no-repeat;
    width: 78vw;
    height: 65%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 0%;
    margin-right: 0%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
   
`;

export const DivEventDetails = styled.View `
  
    width: 78vw;
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
   
    
`;

export const DivEventInformation = styled.View `
  
    width: 78vw;
    height: 50%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
   
    
`;


export const DivEventName = styled.View `
  
    width: 45vw;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center
   
    
`;

export const DivEventDate = styled.View `
  
    width: 33vw;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
   
    
`;

export const DivEventAddress = styled.View `
  
    width: 78vw;
    height: 50%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;


    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    
    
`;

export const EventName = styled.Text `
    color: black;
    text-align: center;
    font-size: 1.07em;
    font-weight: bold;
`;

export const EventDate = styled.Text `
    color: black;
    text-align: center;
    font-size: 1em;
    font-style: italic;
    
`;

export const EventAddress = styled.Text `
    color: grey;
    text-align: center;
    font-size: 1.05em;
    
`;

