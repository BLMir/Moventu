import React, { useState } from 'react';

import { theme } from '../constants';

import {
  Button,
  ButtonText,
  Container,
  ScreenHeading,
  ScreenText,
  Slider
} from '../components';

const SetRoute = ({ navigation }) => {
  const [distance, setDistance] = useState(0);

  return (
    <Container>
      <ScreenHeading>Set route</ScreenHeading>
      <ScreenText large bold style={{ textAlign: 'center' }}>
        How many km?
      </ScreenText>
      <ScreenText large style={{ textAlign: 'center' }}>
        {Math.round(distance)}
      </ScreenText>
      <Slider
        value={distance}
        style={{ width: '90%', marginBottom: theme.space.m }}
        onValueChange={value => setDistance(value)}
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
