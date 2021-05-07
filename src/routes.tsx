import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Profile from './pages/Profile';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#F9A826',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#121212' },
        }}
        initialRouteName="Home"
      >
        <AppStack.Screen
          name="Home"
          component={Home}
          options={{ title: 'GitHub Profiles' }}
        />
        <AppStack.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Profile' }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
