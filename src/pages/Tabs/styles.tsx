import styled from 'styled-components/native';

// A Página inteira
export const Container = styled.View `
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
`;

// Conteúdo

export const Content = styled.ScrollView `
    width: 100%;
    height: 100%;
`;

// TabBar e posição
export const TabBar = styled.View `
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 8vh;
    background-color: white;
   

    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

// Caixa para cada ícone da TabBar
export const IconBox = styled.View `
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IconButton = styled.TouchableHighlight `
    display: flex;
    justify-content: center;
    align-items: center;
`;