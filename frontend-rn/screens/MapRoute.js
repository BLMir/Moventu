import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components';

import { theme } from '../constants';

import Container from '../components/Container';
import FixedBar from '../components/FixedBar';
import Button from '../components/Button';
import ButtonText from '../components/ButtonText';

const Direction = styled.Text`
  font-size: ${theme.size.m};
  font-weight: 700;
  color: ${theme.color.lighter};
`;

const Distance = styled.Text`
  font-size: ${theme.size.s};
  color: ${theme.color.light};
`;

const Map = styled.Image`
  position: absolute;
  top: 0;
  left: -100;
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
    <Map source={require('../assets/testmap.png')} />
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
