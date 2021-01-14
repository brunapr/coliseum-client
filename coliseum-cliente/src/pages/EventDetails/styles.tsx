import styled from 'styled-components/native';

export const Container = styled.View `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BackIcon = styled.TouchableOpacity `
    position: absolute;
    left: 7.5%;
    top: 7.5%;
    z-index: 1;
`;

export const Header = styled.View `
    width: 100%;
    height: 40%;
`;

export const Photo = styled.View `
    width: 100%;
    height: 60%;
`;

export const MainInfo = styled.View `
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 25%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const MainData = styled.View `
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 75%;

    margin-left: 7.5%;
`;

export const DataBox = styled.View `
    width: 15%;
    height: 50%;
    border-radius: 10px;
    margin-right: 2%;

    background-color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Data = styled.Text `
    color: #FF4D00;
    font-weight: bold;
    font-size: 20px;
    
`;
export const Month = styled.Text `
    color: #FF4D00;
    font-style: italic;
    font-size: 16px;
    line-height: 15px;
`;

export const EventTitle = styled.Text `
    color: #fff;
    font-weight: bold;
    align-self: flex-start;
`;

export const EventAddress = styled.Text `
    color: #fff;
    font-weight: 200;
    font-size: 14px;
    font-style: italic;
    line-height: 15px;
`;

export const FollowEventContainer = styled.View `
    width: 85%;
    margin-top: 5%;

    display: flex; 
    flex-direction: row;
    justify-content: space-between;
`;

export const PeopleFollowing = styled.View `
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 60%;
`;

export const FollowingNumber = styled.Text `
    font-style: italic;
    margin-left: 5%;
`;

export const FollowButton = styled.TouchableOpacity `
    width: 100%;
    border: 3px solid #32CFE3;
    padding: 4%;
    border-radius: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FollowButtonClicked = styled.TouchableOpacity `
    width: 100%;
    border: 3px solid #32CFE3;
    background-color: #32CFE3;
    padding: 4%;
    border-radius: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text `
    color: #32CFE3;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.5px;
`;

export const ButtonTextClicked = styled.Text `
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.5px;
`;

export const AllDetails = styled.View `
    width: 85%;
    margin-top: 3%;

    display: flex;
    flex-direction: column;
`;

export const AllDetailsTitle = styled.Text `
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 3%;
`;

export const DetailsContainer = styled.View `
    margin-bottom: 4%;
`;

export const DetailType = styled.Text `
    color: #5A5A5A;
    font-style: italic;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: -0.5px;
`;

export const DetailData = styled.Text `
    width: auto;
    color: #5A5A5A;
    font-size: 18px;
`;

export const PromoterContainer = styled.View `
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const InfoButton = styled.TouchableOpacity `
    width: auto;
    height: auto;
`;