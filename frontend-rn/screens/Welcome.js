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
  font-weight: bold;
  margin-bottom: ${theme.space.m};
`;

const Slogan = styled.Text`
  color: ${theme.color.light};
  font-size: ${theme.size.m};
  margin-bottom: ${theme.space.xl};
`;

const Welcome = () => (
  <Container>
    <Logo>Moventu</Logo>
    <Slogan>Get lost. A bit.</Slogan>
    <Button primary onPress={() => {}}>
      <ButtonText large bold>
        START
      </ButtonText>
    </Button>
    <Button onPress={() => {}}>
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
