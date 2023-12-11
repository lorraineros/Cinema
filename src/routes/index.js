import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cinemas from '../views/Cinemas';
import CinemaDetail from '../views/CinemaDetail';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Cinemas">
      <Stack.Screen name="Cinemas" component={Cinemas} />
      <Stack.Screen name="CinemaDetail" component={CinemaDetail} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
