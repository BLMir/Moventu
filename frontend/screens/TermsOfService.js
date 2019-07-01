import React from 'react';
import styled from 'styled-components';

import { theme } from '../constants';

import {
  Button,
  ButtonText,
  Container,
  FixedBar,
  ScreenHeading,
  ScreenText
} from '../components';

const TermsOfService = ({ navigation }) => (
  <Container>
    <FixedBar top left>
      <Button onPress={() => navigation.goBack(null)}>
        <ButtonText style={{ width: '100%', textAlign: 'left' }}>
          Back
        </ButtonText>
      </Button>
    </FixedBar>
    <ScreenHeading>Terms of service</ScreenHeading>
    <ScreenText>
      This is an experimental app.
      {'\n'}
      {'\n'}
      Be careful.
    </ScreenText>
  </Container>
);

TermsOfService.navigationOptions = {
  header: null
};

export default TermsOfService;
