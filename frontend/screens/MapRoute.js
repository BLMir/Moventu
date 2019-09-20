import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, Text } from 'react-native';
import MapView from 'react-native-maps';
import polyline from '@mapbox/polyline';
import Geolocation from 'react-native-geolocation-service';

import { theme } from '../constants';

import {
  ButtonStop,
  Direction,
  Distance,
  Number,
  Unit
} from './MapRoute.styles';
import { ButtonText, Container, FixedBar } from '../components';

import responseDirections from '../data/responseDirections.json';

export const MapRoute = ({ navigation }) => {
  const data = responseDirections[0].routes[0].overview_polyline.points;
  const points = polyline.decode(data);

  const route = points.map((point) => {
    return {
      latitude: point[0],
      longitude: point[1]
    };
  });

  const [location, setLocation] = useState({
    latitude: route[0].latitude,
    longitude: route[0].longitude,
    latitudeDelta: 0.003,
    longitudeDelta: 0.003
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003
        });
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.color.dark }}>
      <Container>
        <FixedBar top left>
          <Direction>Follow NE direction</Direction>
          <Distance>150m</Distance>
        </FixedBar>
        <MapView
          initialRegion={location}
          showsUserLocation={true}
          followsUserLocation={true}
          showsPointsOfInterest={false}
          showsBuildings={false}
          showsTraffic={false}
          showsIndoors={false}
          toolbarEnabled={false}
          loadingEnabled={true}
          zoomEnabled={false}
          minZoomLevel={60}
          maxZoomLevel={60}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        >
          <MapView.Polyline
            coordinates={route}
            strokeWidth={2}
            strokeColor="green"
          />
        </MapView>
        <FixedBar bottom row center>
          <Number>
            2.7 / 5 <Unit>km</Unit>
          </Number>
          <Number>
            32 <Unit>min</Unit>
          </Number>
          <ButtonStop onPress={() => navigation.navigate('Welcome')}>
            <ButtonText bold>End</ButtonText>
          </ButtonStop>
        </FixedBar>
      </Container>
    </SafeAreaView>
  );
};

MapRoute.navigationOptions = {
  header: null
};
