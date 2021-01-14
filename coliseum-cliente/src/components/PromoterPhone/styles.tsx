import styled from 'styled-components/native';

export const Container = styled.View `
    width: 40%;
    margin-left: 5%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PhoneContainer = styled.View `
    width: 100%;
    background-color: #000;
    border-radius: 5px;
    padding: 1%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Square = styled.View `
    position: absolute;
    left: -10px;
    width: 6%;
    height: 20%;
    background-color: #000;
`;

export const PhoneText = styled.Text `
    color: white;
    font-size: 20px;
`;