import React from 'react';
import { SafeAreaView } from 'react-native';

import { theme } from '../constants';

import {
  Button,
  ButtonText,
  Container,
  FixedBar,
  ScreenHeading,
  ScreenText
} from '../components';

const About = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: theme.color.dark }}>
    <Container>
      <FixedBar top left>
        <Button onPress={() => navigation.goBack(null)}>
          <ButtonText style={{ width: '100%', textAlign: 'left' }}>
            Back
          </ButtonText>
        </Button>
      </FixedBar>
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
  </SafeAreaView>
);

About.navigationOptions = {
  header: null
};

export default About;
