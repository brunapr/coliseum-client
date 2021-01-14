import styled from 'styled-components/native';
import img from '../../../assets/image1.png';

export const Card = styled.View `
    background: white;

    width: 78%;
    height: 25%;

    display: flex;
    flex-direction: row;
    align-items: flex-start;

    margin-top: 3%;
    margin-bottom: 5%;
    margin-left: 10%;

    border-radius:30px;
`;


export const DivImage = styled.View `
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;

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
    margin-left: 1%;

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
    text-align: center;
    font-size: 16px;
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
