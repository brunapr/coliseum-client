import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';

import { Input } from '../../styles';
import { Header, Content, InputBox, FilterBox, TextBox, SearchText, FilterComponent } from './styles';

import { LinearGradient } from 'expo-linear-gradient';
import { BiSlider, BiSearch } from 'react-icons/bi';

import Filter from '../../../components/Filter/index';

Search.navigationOptions = {
    header: null,
  };

  function useComponentVisible(initialIsVisible: any) {
    const [isComponentVisible, setIsComponentVisible] = useState(
      initialIsVisible
    );
    const ref = useRef(null);
  
    const handleHideDropdown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsComponentVisible(false);
      }
    };
  
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsComponentVisible(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("keydown", handleHideDropdown, true);
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("keydown", handleHideDropdown, true);
        document.removeEventListener("click", handleClickOutside, true);
      };
    });
  
    return { ref, isComponentVisible, setIsComponentVisible };
  }

export default function Search() {
    const {
        ref,
        isComponentVisible,
        setIsComponentVisible
      } = useComponentVisible(false);

    return(
        <Content>
            <FilterComponent ref={ref}>
                {isComponentVisible &&
                    <Filter/> 
                }
            </FilterComponent>
            <Header>
            <LinearGradient
                colors={['#FF4D00', '#FF9345']}
                start={[0,1]}
                end={[1,0]}
                style={{
                position: 'absolute',
                width: "100%",
                height: "100%",
                borderBottomRightRadius: 35,
                borderBottomLeftRadius: 35,
                }}
            />
                <InputBox>
                    <BiSearch color="#535353" size={20}/>
                    <Input placeholder="Pesquise aqui"/>
                </InputBox>
                <FilterBox onPress={() => setIsComponentVisible(true)}>
                    <BiSlider color="#fff" size={24}/>
                </FilterBox> 
            </Header>

            <TextBox>
                <SearchText>Você pesquisou por... </SearchText> 
                {/* depois colocar o value do input quando for pesquisar */}
                <SearchText style={{color: "#32CFE3"}}>Food Truck</SearchText>
            </TextBox>

            {/* componente dos eventos */}
            <View/>
        </Content>
    );
}