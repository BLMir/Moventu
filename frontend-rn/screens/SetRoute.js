import React from 'react';
import styled from 'styled-components';

import { theme } from '../constants';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Button from '../components/Button';
import ButtonText from '../components/ButtonText';

const SetRoute = () => (
  <Container>
    <Heading>Set Route</Heading>
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