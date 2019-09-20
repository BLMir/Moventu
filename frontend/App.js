import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { About, MapRoute, SetRoute, TermsOfService, Welcome } from './screens';

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
