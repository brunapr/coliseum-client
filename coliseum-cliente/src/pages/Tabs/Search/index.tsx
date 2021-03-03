import React, { useState, useEffect, useRef } from 'react';

import { useForm, Controller } from 'react-hook-form';

import { Input } from '../../styles';
import { Header, Content, InputBox, FilterBox, TextBox, SearchText, FilterComponent, Scroll, WrapResults } from './styles';

import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

import EventSmallCard from '../../../components/EventSmallCard/index';

import Filter from '../../../components/Filter/index';

import api from '../../../services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface EditSearch {
    text: string
}

interface Event {
    event: {
      id: number,
      name: string,
      city: string,
      date: string,
      neighborhood: string,
    }
}


export default function Search() {

    // Faz o componente de filtro sumir quando clicado fora
    const [ isVisible, setIsVisible ] = useState(false);

    // Faz o View da pesquisa aparecer
    const [ searchText, setSearchText ] = useState(false);

    // Valor do input --> o que será mandado pro back <--
    const [ hasSearch, setSearch ] = useState('');

    // A resposta da pesquisa com os arrays
    const [ searchResults, setSearchResults ] = useState<Event[]>();

    // O que será passado para o filtro
    const [checked, setChecked] = useState('first');

    function handleFilterChange(changeFilter:any) {
      setChecked(changeFilter)
    }

    function handleFilterClose(closeFilter:any) {
      setIsVisible(closeFilter)
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
            <FilterComponent>
                {isVisible &&
                    <Filter filterChange={handleFilterChange} parentChange={checked} filterClose={handleFilterClose} childClose={isVisible}/> 
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
                    <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                      <Icon name="search" size={20} color="#535353" />
                    </TouchableOpacity>

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
                <FilterBox onPress={() => setIsVisible(true)}>
                    <Icon name="sliders" size={24} color="#fff" />
                </FilterBox> 
            </Header>
            { searchText && 
              <TextBox>
                  <SearchText>Você pesquisou por... </SearchText> 
                  <SearchText style={{color: "#32CFE3"}}>{hasSearch}</SearchText>
              </TextBox>
            }

            <Scroll>
              <WrapResults>
                {/* componente dos eventos */}
                {searchResults?.map(searchResult => {
                  return(
                      <EventSmallCard key={searchResult.event.id} name={searchResult.event.name} date={searchResult.event.date} address={searchResult.event.neighborhood}/>
                  )
                })}
              </WrapResults>
            </Scroll>
        </Content>
    );
}