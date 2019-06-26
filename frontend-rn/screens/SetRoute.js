import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components';

import { theme } from '../constants';
import Container from '../components/Container';
import Heading from '../components/Heading';
import ScreenText from '../components/ScreenText';
import Button from '../components/Button';
import ButtonText from '../components/ButtonText';

const InputDistance = styled.TextInput`
  height: 50;
  width: 300;
  text-align: center;
  background-color: ${theme.color.light};
  color: ${theme.color.dark};
  border-radius: ${theme.radius.normal};
  margin-bottom: ${theme.space.m};
`;

const SetRoute = () => (
  <Container>
    <Heading large>Set Route</Heading>
    <Heading>How far do you want to go?</Heading>
    <ScreenText />
    <InputDistance keyboardType={'numeric'} />
    <Button primary onPress={() => {}}>
      <ButtonText large bold>
        START
      </ButtonText>
    </Button>
  </Container>
);

SetRoute.navigationOptions = {
  header: null
};

export default SetRoute;
