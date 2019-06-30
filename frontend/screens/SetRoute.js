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
        {distance}
      </ScreenText>
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
