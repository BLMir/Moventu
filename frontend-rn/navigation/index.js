import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
/*import About from '../screens/About';
import SetRoute from '../screens/SetRoute';
import Settings from '../screens/Settings';
import MapRoute from '../screens/MapRoute';
import RouteDetails from '../screens/RouteDetails';*/

import { theme } from '../constants';

const screens = createStackNavigator(
  {
    Welcome,
    /*About,
    SetRoute,
    Settings,
    MapRoute,
    RouteDetails*/
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

export default createAppContainer(screens);
