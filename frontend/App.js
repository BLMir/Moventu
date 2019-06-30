import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from './screens/Welcome';
import About from './screens/About';
import SetRoute from './screens/SetRoute';
import MapRoute from './screens/MapRoute';

const screens = createStackNavigator(
  {
    Welcome,
    About,
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
