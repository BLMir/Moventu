import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

import { theme } from '../constants';
import Container from '../components/Container';
import Button from '../components/Button';
import ButtonText from '../components/ButtonText';

const Logo = styled.Text`
  color: ${theme.color.lighter};
  font-size: ${theme.size.xl};
  font-weight: 900;
  margin-bottom: ${theme.space.s};
`;

const Slogan = styled.Text`
  color: ${theme.color.light};
  font-size: ${theme.size.l};
  margin-bottom: ${theme.space.xl};
`;

const Welcome = ({ navigation }) => (
  <Container>
    <Logo>Moventu</Logo>
    <Slogan>Get lost. A bit.</Slogan>
    <Button primary onPress={() => navigation.navigate('SetRoute')}>
      <ButtonText large bold>
        GET STARTED
      </ButtonText>
    </Button>
    <Button onPress={() => navigation.navigate('About')}>
      <ButtonText>Learn more</ButtonText>
    </Button>
    <Button onPress={() => {}}>
      <ButtonText>Terms of service</ButtonText>
    </Button>
  </Container>
);

Welcome.navigationOptions = {
  header: null
};

export default Welcome;
