import React from 'react';
import { TextInput, KeyboardAvoidingView } from 'react-native';
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

const StyledHeading = styled(Heading)`
  margin-bottom: 10;
`;

const SetRoute = () => (
  <Container>
    <Heading large>Set Route</Heading>
    <StyledHeading>How far do you want to go?</StyledHeading>
    <ScreenText />
    <KeyboardAvoidingView behavior="padding" enabled>
      <InputDistance keyboardType={'numeric'} />
      <Button primary onPress={() => {}}>
        <ButtonText large bold>
          START
        </ButtonText>
      </Button>
    </KeyboardAvoidingView>
  </Container>
);

SetRoute.navigationOptions = {
  header: null
};

export default SetRoute;
