import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';

import { BiHome, BiSearch, BiMap, BiSticker, BiUser } from "react-icons/bi";
import { TabBar, IconBox, IconButton, Container, Content } from './styles';

import Account from './Account/index';
import { ScrollView } from 'react-native-gesture-handler';

export default function Tabs() {
    const [home, useHome] = useState(false);
    const [account, useAccount] = useState(true);

    console.log(home)
    console.log(account)

    return(
        <Container>
            {/* <TabBar>
                <IconBox>
                    <IconButton>
                        <BiHome size={24}/>
                    </IconButton>
                </IconBox>

                <IconBox>
                    <IconButton>
                        <BiSearch size={24}/>
                    </IconButton>
                </IconBox>

                <IconBox>
                    <IconButton>
                        <BiMap size={24}/>
                    </IconButton>
                </IconBox>

                <IconBox>
                    <IconButton>
                        <BiSticker size={24}/>
                    </IconButton>
                </IconBox>
                
                <IconBox>
                    <IconButton>
                        <BiUser size={24}/>
                    </IconButton>
                </IconBox>
            </TabBar> */}

            <Content>
                { home &&
                <View>
                    <Text>HOME</Text>
                </View>
                }

                { account && 
                <Account/>
                }
            </Content>
        </Container>
    )
    
};