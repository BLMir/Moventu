import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

import { theme } from '../constants';
import Button from '../components/Button';
import Container from '../components/Container';

const Logo = styled.Text`
  color: ${theme.color.lighter};
  font-size: ${theme.size.xl};
  font-weight: bold;
  margin-bottom: ${theme.size.m};
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
      <Text>START</Text>
    </Button>
    <Button onPress={() => {}}>
      <Text>Learn more</Text>
    </Button>
    <Button onPress={() => {}}>
      <Text>Terms of service</Text>
    </Button>
  </Container>
);

Welcome.navigationOptions = {
  header: null
};

export default Welcome;
