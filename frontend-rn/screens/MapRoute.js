import React from 'react';
import { Text, Image } from 'react-native';
import styled from 'styled-components';

import { theme } from '../constants';

import FixedBar from '../components/FixedBar';
import Button from '../components/Button';
import ButtonText from '../components/ButtonText';

import testmap from '../assets/testmap.png';

const Direction = styled.Text`
  font-size: 24;
  font-weight: 700;
  display: block;
  width: 100%;
  line-height: 1.55;
  color: ${theme.color.lighter};
`;

const Distance = styled.Text`
  font-size: 20;
  color: ${theme.color.light};
  display: block;
  width: 100%;
`;

const Map = styled.Image`
  position: fixed;
  top: 0;
  left: -200;
`;

const ButtonStop = styled(Button)`
  font-weight: 700;
  background-color: hsl(360, 81%, 45%);
  width: 10vw;
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
      <Wrapper column>
        <Direction>Follow NE direction</Direction>
        <Distance>150m</Distance>
      </Wrapper>
    </FixedBar>{' '}
    <Map source={require('../assets/testmap.png')} />
    <FixedBar bottom>
      <Wrapper row between>
        <Number>
          2.7 / 5 <Unit>km</Unit>
        </Number>
        <Number>
          32 <Unit>min</Unit>
        </Number>
        <ButtonStop onPress={() => navigation.navigate('Welcome')}>
          End
        </ButtonStop>
      </Wrapper>
    </FixedBar>
  </>
);

export default MapRoute;
