import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import styled from 'styled-components';
import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';

import { theme } from '../constants';

import { Button, ButtonText, Container, FixedBar } from '../components';

const Direction = styled.Text`
  font-size: ${theme.size.m};
  font-weight: 700;
  color: ${theme.color.lighter};
`;

const Distance = styled.Text`
  font-size: ${theme.size.s};
  color: ${theme.color.light};
`;

const ButtonStop = styled(Button)`
  background-color: hsl(360, 81%, 45%);
  width: 100;
  height: 44;
`;

const Number = styled.Text`
  font-weight: 700;
  font-size: ${theme.size.m};
  color: ${theme.color.lighter};
`;

const Unit = styled.Text`
  color: ${theme.color.light};
  font-size: ${theme.size.s};
  font-weight: 400;
`;

const MapRoute = ({ navigation, location }) => {
  const [route, setRoute] = useState({
    latitude: null,
    longitude: null,
    error: null,
    concat: null,
    coords: [],
    x: 'false',
    cordLatitude: -6.23,
    cordLongitude: 106.75
  });

  fetch('../data/responseDirections.json')
    .then(response => response.json())
    .then(findresponse => {
      setRoute({
        data: findresponse
      });
    });

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
          showsMyLocationButton={false}
          showsPointsOfInterest={false}
          zoomEnabled={false}
          minZoomLevel={10}
          maxZoomLevel={10}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        >
          {!!route.latitude && !!route.longitude && (
            <MapView.Marker
              coordinate={{
                latitude: route.latitude,
                longitude: route.longitude
              }}
              title={'Your Location'}
            />
          )}
          {!!route.cordLatitude && !!route.cordLongitude && (
            <MapView.Marker
              coordinate={{
                latitude: route.cordLatitude,
                longitude: route.cordLongitude
              }}
              title={'Your Destination'}
            />
          )}
          {!!route.latitude && !!route.longitude && route.x == 'true' && (
            <MapView.Polyline
              coordinates={route.coords}
              strokeWidth={2}
              strokeColor="red"
            />
          )}
          {!!route.latitude && !!route.longitude && route.x == 'error' && (
            <MapView.Polyline
              coordinates={[
                {
                  latitude: route.latitude,
                  longitude: route.longitude
                },
                {
                  latitude: route.cordLatitude,
                  longitude: route.cordLongitude
                }
              ]}
              strokeWidth={2}
              strokeColor="red"
            />
          )}
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

export default MapRoute;
