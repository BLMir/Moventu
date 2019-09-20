import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from './screens/Welcome';
import About from './screens/About';
import TermsOfService from './screens/TermsOfService';
import SetRoute from './screens/SetRoute';
import MapRoute from './screens/MapRoute';

const screens = createStackNavigator(
  {
    Welcome,
    About,
    TermsOfService,
    SetRoute,
    MapRoute
  },
  {
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackImage: <Image />,
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRightContainerStyle: {}
    }
  }
);

const Navigation = createAppContainer(screens);

export default function App() {
  return <Navigation />;
}
