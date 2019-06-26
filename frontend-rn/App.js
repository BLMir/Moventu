import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from './screens/Welcome';
import SetRoute from './screens/SetRoute';

const screens = createStackNavigator(
  {
    Welcome,
    SetRoute
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
