import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

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
  const [position, setPosition] = useState([]);

  useEffect(() => {
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          setPosition(position);
        },
        (error) => {
          throw error;
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.color.dark }}>
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
          onValueChange={(value) => setDistance(value)}
        />
        <Button primary onPress={() => navigation.navigate('MapRoute')}>
          <ButtonText large bold>
            START
          </ButtonText>
        </Button>
      </Container>
    </SafeAreaView>
  );
};

SetRoute.navigationOptions = {
  header: null
};

export default SetRoute;
