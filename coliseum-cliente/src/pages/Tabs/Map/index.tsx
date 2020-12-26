import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import mapMarker from '../../../../assets/marker.png';
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
        <View style={styles.container}>
          <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
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
                            <View style={styles.calloutContainer}>
                              <Text style={styles.calloutText}>{event.name}</Text>
                            </View>
                          </Callout>
                        </Marker>
                    );
                })
            }
            
          </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    calloutContainer: {
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 16,
        justifyContent: 'center',
    },

    calloutText: {
        color: '#0089a5',
        fontFamily: 'Nunito_700Bold',
        fontSize: 14,
    },

    footer: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 32,

        backgroundColor: '#fff',
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        elevation: 3,
    },

    footerText: {
        color: '#8fa7b3',
        fontFamily: 'Nunito_700Bold'
    },

    createOrphanageButton: {
        width: 56,
        height: 56,
        backgroundColor: '#15c3d6',
        borderRadius: 20,

        justifyContent: 'center',
        alignItems: 'center',
    },
});