import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView } from 'react-native';
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
  const [location, setLocation] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const location = JSON.stringify(position);
        setLocation(location);
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.color.dark }}>
      <Container>
        <ScreenHeading>Set route</ScreenHeading>
        <ScreenText>Current position: {location}</ScreenText>
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
