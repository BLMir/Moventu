import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components';

import { theme } from '../constants';

import { Button, ButtonText, Container, FixedBar } from '../components';

import MapView from 'react-native-maps';

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

const MapRoute = ({ navigation }) => (
  <Container>
    <FixedBar top left style={{ paddingTop: 30, height: 90 }}>
      <Direction>Follow NE direction</Direction>
      <Distance>150m</Distance>
    </FixedBar>
    <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        rigt: 0,
        bottom: 0
      }}
    />
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
);

MapRoute.navigationOptions = {
  header: null
};

export default MapRoute;
