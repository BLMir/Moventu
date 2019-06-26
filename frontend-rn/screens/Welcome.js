import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

import { theme } from '../constants';
import Container from '../components/Container';
import Button from '../components/Button';
import StyledText from '../components/StyledText';

const Logo = styled.Text`
  color: ${theme.color.lighter};
  font-size: ${theme.size.xl};
  font-weight: bold;
  margin-bottom: ${theme.space.s};
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
      <StyledText large bold>
        START
      </StyledText>
    </Button>
    <Button onPress={() => {}}>
      <StyledText>Learn more</StyledText>
    </Button>
    <Button onPress={() => {}}>
      <StyledText>Terms of service</StyledText>
    </Button>
  </Container>
);

Welcome.navigationOptions = {
  header: null
};

export default Welcome;
