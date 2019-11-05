import React from 'react';
import { Animated } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home.js';
import Contact from '../screens/Contact.js';
import Login from '../screens/Login.js';
import Colors from '../constants/Colors.js';
import News from '../screens/News';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Home: {
      screen: Home,
    },
    Contact: {
      screen: Contact,
    },
    News: {
      screen: News,
    },
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: null,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
      },
    }),
  },
);

export default createAppContainer(AppNavigator);
