import React from 'react';
import { TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import styled from 'styled-components';

import { theme } from '../constants';

import Container from '../components/Container';
import ScreenHeading from '../components/ScreenHeading';
import ScreenText from '../components/ScreenText';
import Button from '../components/Button';
import ButtonText from '../components/ButtonText';

const InputDistance = styled.TextInput`
  height: 50;
  width: 200;
  text-align: center;
  background-color: ${theme.color.light};
  color: ${theme.color.dark};
  border-radius: ${theme.radius.normal};
  margin-top: ${theme.space.s};
  margin-bottom: ${theme.space.m};
  font-size: ${theme.size.m};
  margin-left: auto;
  margin-right: auto;
`;

const SetRoute = ({ navigation }) => (
  <Container>
    <ScreenHeading>Set Route</ScreenHeading>
    <ScreenText large bold>
      How many km?
    </ScreenText>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      enabled
    >
      <InputDistance keyboardType={'numeric'} />
      <Button primary onPress={() => navigation.navigate('MapRoute')}>
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
