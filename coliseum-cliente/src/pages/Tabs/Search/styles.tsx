import styled, { css } from 'styled-components/native';

export const Content = styled.View `
    width: 100%;
    height: 100%;
`;

export const Header = styled.View `
    width: 100%;
    height: 12%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
`;

export const InputBox = styled.View `
    width: 70%;
    background-color: white;
    padding-left: 4%;
    margin-bottom: 5%;

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
    margin-bottom: 5%;

    margin-left: 8%;
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
    left: 50%;
    top: 30%;
    margin-left: -30%;

    width: 90%;
    height: auto;
    z-index: 1;
`;

  export const Scroll = styled.View `
        width: 100%;
        height: 75%;
        margin-top: 10%;

        display: flex;
        flex-direction: column;
        align-items: center;
    `;