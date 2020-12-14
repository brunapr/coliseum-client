import styled, { css } from 'styled-components/native';

export const Content = styled.View `
    width: 100%;
    height: 100vh;
`;

export const Header = styled.View `
    width: 100%;
    height: 10vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const InputBox = styled.View `
    width: 70%;
    background-color: white;
    padding-left: 4%;

    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 40px;

    display: flex;
    flex-direction: row;
    alignItems: center;
`;

export const FilterBox = styled.TouchableHighlight `
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 5%;
    padding: 1%;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`;

export const TextBox = styled.Text `
    margin-top: 5%;
    margin-left: 5%;
    display: flex;
`;

export const SearchText = styled.Text `
    font-style: italic;
    font-weight: 600;
    font-size: 14px;

    color: #4E4E4E;
`;

export const FilterComponent = styled.View `
    position: absolute;
    top: 25%;
    left: 15%;
    z-index: 1;
`;

  export const Scroll = styled.View `
        width: 100%;
        height: 75vh;
        margin-top: 10%;
        overflow-y: scroll;

        display: flex;
        flex-direction: center;
        align-items: center;
    `;