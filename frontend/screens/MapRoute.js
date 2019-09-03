import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import styled from 'styled-components';
import MapView, { Marker } from 'react-native-maps';
import polyline from '@mapbox/polyline';
import Geolocation from 'react-native-geolocation-service';

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

  const route = points.map((point) => {
    return {
      latitude: point[0],
      longitude: point[1]
    };
  });

  const [location, setLocation] = useState({
    latitude: 39.587857,
    longitude: 2.650178,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        });
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  // useEffect(() => {
  //   getCurrentLocation();
  // });

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
            coordinates={route}
            strokeWidth={2}
            strokeColor="green"
          />
          <Marker coordinate={location} />
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
