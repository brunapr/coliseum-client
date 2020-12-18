import styled from 'styled-components/native';
import img from '../../../assets/image1.png';

export const Card = styled.View `
    background: white;
    width: 78vw;
    height: 12vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 3%;
    margin-bottom: 5%;
    margin-left: 10%;
    border-radius:30px;
`;


export const DivImage = styled.View `
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    width: 20vw;
    height: 12vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 30px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 30px;
   
`;