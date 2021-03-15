import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { BackIcon, CommentBox, Container, Content, CreateCommentaryButton, CreateCommentComponent, UserComment, UserName } from './styles';
import api from '../../services/api';
import CreateCommentary from '../../components/CreateCommentary/index';

interface Commentary {
    id: number;
    commentary: string;
    user: {
        name: string;
    };
    userName: string;
}

export default function CommentsPage(props:any) {

    const event_id = props.route.params.id;
    const navigation = useNavigation();

    const [ commentaries, setCommentaries ] = useState<Commentary[]>([]);
    const [ isVisible, setIsVisible ] = useState(false);

    function handleCommentaryClose(closeFilter:any) {
        setIsVisible(closeFilter)
    }

    useEffect(() => {
        api.get(`api/event/commentaries/${event_id}`).then( response => {
            console.log(response.data);
            console.log(event_id)
            setCommentaries(response.data);
        })
    }, [isVisible])

    return(
        <Container>
            <BackIcon onPress={() => {navigation.navigate('EventDetails')}}>
                <Icon name="arrow-left-circle" size={36} color="#32CFE3" />
            </BackIcon>


            {
                isVisible && 
                <CreateCommentComponent>
                    <CreateCommentary event_id={event_id} commentaryClose={handleCommentaryClose} childClose={isVisible}/>
                </CreateCommentComponent>
            }


            {
                !isVisible &&
                <CreateCommentaryButton onPress={() => setIsVisible(true)}>
                    <Icon name="feather" size={40} color="#FFFFFF" />
                </CreateCommentaryButton>
            }
            
            <Content>
                <ScrollView>
                    {
                        commentaries.map(commentary => {
                            return(
                                <CommentBox key={commentary.id}>
                                    <UserName>{commentary.user.name}:</UserName>
                                    <UserComment>"{commentary.commentary}"</UserComment>
                                </CommentBox>
                            );
                        })
                    }
                </ScrollView>
            </Content>
        </Container>
    );
}