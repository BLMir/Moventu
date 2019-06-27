import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components';

import { theme } from '../constants';

import FixedBar from '../components/FixedBar';
import Button from '../components/Button';
import ButtonText from '../components/ButtonText';


const Direction = styled.Text`
  font-size: 24;
  font-weight: 700;
  color: ${theme.color.lighter};
`;

const Distance = styled.Text`
  font-size: 20;
  color: ${theme.color.light};
`;

const Map = styled.Image`
  position: absolute;
  top: 60;
`;

const ButtonStop = styled(Button)`
  background-color: hsl(360, 81%, 45%);
  width: 100;
  height: 44;
`;

const Number = styled.Text`
  font-weight: 700;
  font-size: 26;
  color: ${theme.color.lighter};
`;

const Unit = styled.Text`
  color: ${theme.color.light};
  font-size: 17;
  font-weight: 400;
`;

const MapRoute = ({ navigation }) => (
  <>
    <FixedBar top>
      <View>
        <Direction>Follow NE direction</Direction>
        <Distance>150m</Distance>
      </View>
    </FixedBar>
    <Map source={require('../assets/testmap.png')} />
    <FixedBar bottom row>
      <View>
        <Number>
          2.7 / 5 <Unit>km</Unit>
        </Number>
        <Number>
          32 <Unit>min</Unit>
        </Number>
        <ButtonStop onPress={() => navigation.navigate('Welcome')}>
          <ButtonText>End</ButtonText>
        </ButtonStop>
      </View>
    </FixedBar>
  </>
);

export default MapRoute;
