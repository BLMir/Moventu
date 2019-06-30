import React from 'react';
import styled from 'styled-components';

import { theme } from '../constants';

import { Container, ScreenHeading, ScreenText } from '../components';

const About = ({ navigation }) => (
  <Container>
    <ScreenHeading>Terms of service</ScreenHeading>
    <ScreenText>
      This is an experimental app.
      {'\n'}
      {'\n'}
      Be careful.
    </ScreenText>
  </Container>
);

About.navigationOptions = {
  header: null
};

export default About;
