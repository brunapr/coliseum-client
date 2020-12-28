import React, { useState, useEffect, useRef } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { Input } from '../../styles';
import { Header, Content, InputBox, FilterBox, TextBox, SearchText, FilterComponent, Scroll } from './styles';

import { LinearGradient } from 'expo-linear-gradient';
import { BiSlider, BiSearch } from 'react-icons/bi';

import Filter from '../../../components/Filter/index';
import api from '../../../services/api';

interface EditSearch {
    text: string
}

interface Events {
    event: {
      id: number,
      name: string,
      neighborhood: string,
    }
}

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
  
    const handleClickOutside = (event: { target: any; }) => {
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

    // Faz o componente de filtro sumir quando clicado fora
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    // Faz o View da pesquisa aparecer
    const [ searchText, setSearchText ] = useState(false);

    // Valor do input --> o que será mandado pro back <--
    const [ hasSearch, setSearch ] = useState('');

    // A resposta da pesquisa com os arrays
    const [ searchResults, setSearchResults ] = useState<Events[]>();

    // O que será passado para o filtro
    const [checked, setChecked] = useState('first');
    function handleFilterChange(changeFilter:any) {
      setChecked(changeFilter)
    }

    function handleFilterClose(closeFilter:any) {
      setIsComponentVisible(closeFilter)
    }

    const { control, handleSubmit } = useForm({ mode: 'onTouched' });
    const onSubmit = (data: EditSearch) => { 
      setSearchText(true);
      setSearch(data.text);
      const search = data.text;

      api.post('api/search', { search: search }).then( response => {
        console.log(response)
        setSearchResults(response.data)
      }, error => {
        alert("Não foram encontrados eventos que satisfazem o critério de busca.")
      })

    };

    return(
        <Content>
            <FilterComponent ref={ref}>
                {isComponentVisible &&
                    <Filter filterChange={handleFilterChange} parentChange={checked} filterClose={handleFilterClose} childClose={isComponentVisible}/> 
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
                    <TouchableHighlight onPress={handleSubmit(onSubmit)}>
                      <BiSearch color="#535353" size={20}/>
                    </TouchableHighlight>

                    <Controller
                        control={control}
                        render={({ onChange, value }) => (
                            <Input
                                placeholder={ checked === 'first' ? "Pesquise o nome do evento" : "Pesquise o nome do bairro" }
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        )}
                        name='text'
                        defaultValue=''
                    />
                </InputBox>
                <FilterBox onPress={() => setIsComponentVisible(true)}>
                    <BiSlider color="#fff" size={24}/>
                </FilterBox> 
            </Header>
            { searchText && 
            <TextBox>
                <SearchText>Você pesquisou por... </SearchText> 
                {/* depois colocar o value do input quando for pesquisar */}
            <SearchText style={{color: "#32CFE3"}}>{hasSearch}</SearchText>
            </TextBox>
            }

            <Scroll>
              {/* componente dos eventos */}
              {searchResults?.map(searchResult => {
                return(
                  <View key={searchResult.event.id}>
                    <Text>{searchResult.event.name}</Text>
                    <Text>{searchResult.event.neighborhood}</Text>
                  </View>
                )
              })}
            </Scroll>
        </Content>
    );
}