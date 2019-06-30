import React, { useState } from 'react';
import Slider from '../components/Slider';

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
      <ScreenText large>{distance}</ScreenText>
      <Slider
        style={{ width: '90%', marginBottom: theme.space.m }}
        onValueChange={() => setDistance(distance + 1)}
      />
      <Button primary onPress={() => navigation.navigate('MapRoute')}>
        <ButtonText large bold>
          START
        </ButtonText>
      </Button>
    </Container>
  );
};

SetRoute.navigationOptions = {
  header: null
};

export default SetRoute;
