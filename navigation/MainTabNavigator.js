import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/common/TabBarIcon';
import Home from '../screens/Home/Home';
import Account from '../screens/Account/Account';
import Colors from '../constants/Colors';
import ViewProfile from '../screens/Account/ProfilePage/ViewProfile';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: Home,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'home'}
    />
  ),
};

HomeStack.path = '';



const AccountStack = createStackNavigator(
  {
    Account: Account,
    ViewProfile: ViewProfile
  },
  config
);

AccountStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true
  if(navigation.state.index > 0){
    tabBarVisible = false
  }
  return{
    tabBarVisible,

    tabBarLabel: 'Account',
    tabBarIcon: ({focused}) => (
    <TabBarIcon name={'user'} focused={focused} />
  )
  }
}

AccountStack.path = '';

const tabNavigator = createBottomTabNavigator({
  AccountStack,
  HomeStack,
}, {
  tabBarOptions: {
    activeTintColor: Colors.tabIconSelected,
    inactiveTintColor: Colors.tabIconDefault,
    tabStyle: {
      backgroundColor: '#222b37'
    }
  }
});

tabNavigator.path = '';

export default tabNavigator;
