import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import styled from 'styled-components';
import MapView, { Polyline } from 'react-native-maps';

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

const MapRoute = ({ navigation }) => {
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('../data/responseDirections.json');
        // const data = await response.json();
        setCoords(response);
      } catch (error) {
        // console.log(`${error.name}: ${error.message}`);
      }
    };
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.color.dark }}>
      <Container>
        <FixedBar top left>
          <Direction>Follow NE direction</Direction>
          <Distance>150m</Distance>
        </FixedBar>
        <MapView
          initialRegion={{
            latitude: 20,
            longitude: 20,
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

export default MapRoute;
