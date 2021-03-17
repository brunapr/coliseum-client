import styled from 'styled-components/native';

export const Container = styled.View `
    flex: 1;
    background-color: #F2F2F2;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BackIcon = styled.TouchableOpacity `
    position: absolute;
    left: 7.5%;
    top: 5%;
    z-index: 1;
`;

export const Content = styled.View `
    width: 80%;
    margin-top: 25%;
    height: 85%;
`;

export const CommentBox = styled.View `
    width: 100%;
    background-color: white;
    border-radius: 20px;
    margin-bottom: 10%;
`;

export const UserName = styled.Text `
    font-weight: bold;
    font-style: italic;
    margin-top: 5%;
    margin-left: 10%;
`;

export const UserComment = styled.Text `
    margin: 10%;
    margin-top: 5%;
    text-align: justify;
`;

export const CreateCommentaryButton = styled.TouchableOpacity `
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 18%;
    height: 8%;
    
    position: absolute;
    bottom: 5%;
    right: 7.5%;
    border-radius: 50px;
    background-color: #32CFE3;
    z-index: 1;
`;

export const CreateCommentComponent = styled.View `
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

export const NoCommentaries = styled.Text `
    text-align: center;
    font-size: 18px;
    opacity: 0.5;
`;