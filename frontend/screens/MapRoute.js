import React, { useState, useEffect, useFetch } from 'react';
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
  // const [coords, setRoute] = useState({
  //   coords: []
  // });

  async function useFetch() {
    const response = await fetch('responseDirections.json');
    const json = await response.json();

    return json.respJson.routes[0].overview_polyline.points;
  }

  var jsonDirections = useFetch();


   //const [lospoints, setLospoints] = useFetch('../data/responseDirections.json');
  //   let coords = points.map((point, index) => {
  //     return {
  //       latitude: point[0],
  //       longitude: point[1]
  //     };
  //   });
  //   setRoute(coords);
  //   return coords;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.color.dark }}>
      <Container>
        <FixedBar top left>
          <Direction>Follow NE direction</Direction>
          <Distance>150m</Distance>
        </FixedBar>
        <Unit>{JSON.stringify(jsonDirections)}</Unit>
        {/* <MapView
          initialRegion={{
            latitude: 41.0082,
            longitude: 28.9784,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
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
          <MapView.Polyline
            coordinates={coords}
            strokeWidth={2}
            strokeColor="red"
          />
        </MapView> */}
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
