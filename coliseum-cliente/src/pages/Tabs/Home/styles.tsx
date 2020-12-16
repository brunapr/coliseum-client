import styled from 'styled-components/native';
import imgEvent from '../../../../assets/Event.png';
import img from '../../../../assets/image1.png';

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
    width: 68vw;
    height: 20vh;
    display: flex;
    margin-top: 0%;
    margin-bottom: 0%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
`;

export const DivImgPopular = styled.View `
    background-image: url(${imgEvent});
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

export const DivImgOther = styled.View `
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

export const Scroll = styled.ScrollView `
    width: 100vw;
    height: 90%;
    margin-left: 2%;
`;

export const PopularCard = styled.View `
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

export const OtherCard = styled.View `
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