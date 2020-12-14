import styled from 'styled-components/native';
import img from '../../../assets/foto.png';

export const Header = styled.View `
    width: 100vw;
    height: 65vw;
`;

export const Photo = styled.View `
    width: 100vw;
    height: 60vw;

    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const MainInfo = styled.View `
    position: absolute;
    bottom: 0;

    width: 100vw;
    height: 18vw;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const MainData = styled.View `
    display: flex;
    flex-direction: row;
    width: 80%;
    word-break: break-word;

    margin-left: 5%;
`;

export const DataBox = styled.View `
    width: 12vw;
    height: 12vw;
    border-radius: 10px;
    margin-right: 5%;

    background-color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Data = styled.Text `
    color: #FF4D00;
    font-weight: bold;
    font-size: 120%;
    line-height: 15px;
`;
export const Month = styled.Text `
    color: #FF4D00;
    font-style: italic;
    font-size: 80%;
`;

export const EventTitle = styled.Text `
    color: #fff;
    font-weight: bold;
`;

export const EventAddress = styled.Text `
    color: #fff;
    font-weight: 200;
    font-size: 80%;
    font-style: italic;
    line-height: 12px;
`;
