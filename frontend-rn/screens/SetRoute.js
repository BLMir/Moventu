import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import Slider from 'react-native-slider';

import { theme } from '../constants';

import Container from '../components/Container';
import ScreenHeading from '../components/ScreenHeading';
import ScreenText from '../components/ScreenText';
import Button from '../components/Button';
import ButtonText from '../components/ButtonText';

const SetRoute = ({ navigation }) => {
  const [distance, setDistance] = useState(0);

  return (
    <Container>
      <ScreenHeading>Set Route</ScreenHeading>
      <ScreenText large bold>
        How many km?
      </ScreenText>
      <ScreenText>{distance}</ScreenText>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        enabled
      >
        <Slider
          style={{ marginBottom: theme.space.m }}
          value={0}
          onValueChange={() => setDistance(distance)}
        />
        <Button primary onPress={() => navigation.navigate('MapRoute')}>
          <ButtonText large bold>
            START
          </ButtonText>
        </Button>
      </KeyboardAvoidingView>
    </Container>
  );
};

SetRoute.navigationOptions = {
  header: null
};

export default SetRoute;
