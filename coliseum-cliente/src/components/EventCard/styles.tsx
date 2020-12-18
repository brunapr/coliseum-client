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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 3%;
    margin-right: 3%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
   
`;

export const DivInfo = styled.View `
  
    width: 78vw;
    height: 35%;
    display: flex-box;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    margin-left: 3%;
    margin-right: 3%;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
   
`;