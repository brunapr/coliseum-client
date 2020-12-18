import React from 'react';


import { View, Text, Button, TextInput, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { InputLabel, Input } from '../../styles';
import { Header, Body, p, Scroll, DivTitle, PopularCard, OtherCard, Title, SubTitle, Content, DivImgPopular, DivImgOther  } from './styles';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { InputBox } from '../../Login/styles';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { BiSearch } from 'react-icons/bi';

Home.navigationOptions = {
    header: null,
  };

interface EditData {
    name: string,
    email: string,
    phoneNumber: string,
    password: string,
    newPassword: string,
    passwordConfirmation: string,
}
export default function Home() {

    const { control, getValues, handleSubmit, errors } = useForm({ mode: 'onTouched' });
    const onSubmit = (data: EditData) => { console.log(data) };
    const onError = (errors: Object) => { console.log(errors) };

    const [editPassword, setEditPassword] = useState(false);

    return(
        <Content>
            <ScrollView>
                <Header>    
                    <LinearGradient
                        colors={['#FF4D00', '#FF9345']}
                        start = {[0,1]}
                        end={[1,0]}
                        style={{
                            position:'absolute',
                            width:"100%",
                            height:"100%",
                            borderBottomRightRadius:35,
                            borderBottomLeftRadius: 35,
                        }}
                    >
                        <DivTitle>
                        <Title>Encontre eventos perto de você</Title>
                        
                        <img src="/../../../../assets/group.png" alt=""/>
                        </DivTitle>
                        
                        
                    </LinearGradient>           

                           
                </Header>
                <Body>

                    <SubTitle>Eventos populares</SubTitle>

                    <Scroll
                        horizontal = {true} 
                    >
                        <PopularCard>

                            <DivImgPopular>
              
                            </DivImgPopular>
           
                        </PopularCard>

                        <PopularCard>

                            <DivImgPopular>
                
                            </DivImgPopular>
                       

                        </PopularCard>

                        <PopularCard>
                            
                            <DivImgPopular>
                
                            </DivImgPopular>
                            
                        </PopularCard>
                    </Scroll>
                    

                    <SubTitle>Outros eventos</SubTitle>

                    <Scroll>
                        < OtherCard>
                            <DivImgOther>

                            </DivImgOther>
                        
                        </OtherCard>
    
                        <OtherCard>
                            <DivImgOther>

                            </DivImgOther>
                            
                        </OtherCard>

                        <OtherCard>
                            <DivImgOther>

                            </DivImgOther>
                            
                        </OtherCard>

                    </Scroll>

                    

                    
                    
                   
                </Body>
              
               

                
                    
                
            </ScrollView>
        </Content>
    );
}