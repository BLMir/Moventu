import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import styled from 'styled-components';
import MapView from 'react-native-maps';
var polyline = require('@mapbox/polyline');

import { theme } from '../constants';

import { Button, ButtonText, Container, FixedBar } from '../components';

import responseDirections from '../data/responseDirections.json';

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

const MapRoute = ({ navigation }) => {
  const data = responseDirections[0].routes[0].overview_polyline.points;
  const points = polyline.decode(data);

  const coords = points.map((point) => {
    return {
      latitude: point[0],
      longitude: point[1]
    };
  });

  const testCoords = JSON.stringify(coords);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.color.dark }}>
      <Container>
        <FixedBar top left>
          <Direction>Follow NE direction</Direction>
          <Distance>150m</Distance>
        </FixedBar>
        <MapView
          initialRegion={{
            latitude: coords[0].latitude,
            longitude: coords[0].longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={true}
          followsUserLocation={true}
          showsMyLocationButton={true}
          showsPointsOfInterest={false}
          zoomEnabled={false}
          minZoomLevel={50}
          maxZoomLevel={50}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        >
          <MapView.Polyline
            coordinates={coords}
            strokeWidth={2}
            strokeColor="green"
          />
        </MapView>
        {/* <Text style={{ marginTop: 100, color: 'white' }}>{testCoords}</Text> */}
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
