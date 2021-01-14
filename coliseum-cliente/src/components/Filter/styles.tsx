import styled from 'styled-components/native';

export const Container = styled.View `
    width: 100%;
    height: 100%;

    background-color: #fff;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
 
export const TitleBox = styled.View `
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 10%;
`;

export const Title = styled.Text `
    font-size: 24px;
    font-style: italic;
    font-weight: 600;
    color: #FF6B00;
`;

export const FilterBox = styled.View `
    margin-left: 10%;
    margin-top: 2%;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const FilterText = styled.Text `
    display: flex;
    align-items: center;
`;

export const GoFilter = styled.TouchableOpacity `
    width: 100%;
    height: 20%;
    margin-top: 5%;
    background-color: #32CFE3;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text `
    font-size: 24px;
    font-weight: bold;
    color: white;
`;