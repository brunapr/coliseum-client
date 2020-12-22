import styled from 'styled-components/native';
import img from '../../../assets/unnamed.jpg';

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
    align-items: center;
    width: 75%;

    margin-left: 7.5%;
`;

export const DataBox = styled.View `
    width: 12vw;
    height: 12vw;
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
    align-self: start;
`;

export const EventAddress = styled.Text `
    color: #fff;
    font-weight: 200;
    font-size: 80%;
    font-style: italic;
    line-height: 12px;
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
    margin-left: 2%;
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
    font-size: 90%;
    letter-spacing: 0.5px;
`;

export const ButtonTextClicked = styled.Text `
    color: #fff;
    font-weight: bold;
    font-size: 90%;
    letter-spacing: 0.5px;
`;

export const AllDetails = styled.View `
    width: 85%;
    margin-top: 3%;

    display: flex;
    flex-direction: column;
`;

export const AllDetailsTitle = styled.Text `
    font-size: 100%;
    font-weight: 600;
    margin-bottom: 3%;
`;

export const DetailsContainer = styled.View `
    margin-bottom: 4%;
`;

export const DetailType = styled.Text `
    color: #5A5A5A;
    font-style: italic;
    font-weight: 600;
    font-size: 85%;
    letter-spacing: -0.5px;
`;

export const DetailData = styled.Text `
    width: auto;
    color: #5A5A5A;
    font-size: 95%;
`;

export const PromoterContainer = styled.View `
    display: flex;
    flex-direction: row;
`;

export const InfoButton = styled.TouchableOpacity `
    width: auto;
    height: auto;
`;