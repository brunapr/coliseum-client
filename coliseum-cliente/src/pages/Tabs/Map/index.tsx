import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import mapMarker from '../../../../assets/marker.png';
import { Content, CalloutContainer, CalloutText } from './styles';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import api from '../../../services/api';

interface Event {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

export default function OrphanagesMap() {
    const [events, setEvents] = useState<Event[]>([]);
    const navigation = useNavigation();

    useFocusEffect(() => {
        api.get('api/events').then(response => {
            setEvents(response.data);
        })
    });

    function handleNavigateToEventDetails(id: number) {
        navigation.navigate('EventDetails', { id });
    }

    return (
        <Content>
          {/* <MapView
              provider={PROVIDER_GOOGLE}
              style={
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
              }
              initialRegion={{
                  latitude: -22.8897679,
                  longitude: -43.3749809,
                  latitudeDelta: 0.008,
                  longitudeDelta: 0.008,
              }}
          >

            {
                events.map(event => {
                    return (
                        <Marker
                            key={event.id}
                            icon={mapMarker}
                            calloutAnchor={{
                                x: 2.8,
                                y: 0.8,
                            }}
                            coordinate={{
                                latitude: event.latitude,
                                longitude: event.longitude,
                            }}
                        >
                          <Callout tooltip onPress={() => {handleNavigateToEventDetails(event.id)}}>
                            <CalloutContainer>
                              <CalloutText style={styles.calloutText}>{event.name}</CalloutText>
                            </CalloutContainer>
                          </Callout>
                        </Marker>
                    );
                })
            }
            
          </MapView> */}
        </Content>
    );
}