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

const TermsOfService = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: theme.color.dark }}>
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
  </SafeAreaView>
);

TermsOfService.navigationOptions = {
  header: null
};

export default TermsOfService;
