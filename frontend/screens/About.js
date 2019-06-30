import React from 'react';
import styled from 'styled-components';

import { theme } from '../constants';

import { Container, ScreenHeading, ScreenText } from '../components';

const About = ({ navigation }) => (
  <Container>
    <ScreenHeading>About</ScreenHeading>
    <ScreenText>
      Moventu is an app born from the necessity to encourage users to GO OUT,
      making them feel the motivation to explore and discover new locations
      around them.
      {'\n'}
      {'\n'}
      It serves a random loop route based on location and desired activity
      distance, and guides the user one step at a time, without revealing the
      full route or directions.
    </ScreenText>
  </Container>
);

About.navigationOptions = {
  header: null
};

export default About;
