import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from '../views/Start';
import Cinemas from '../views/Cinemas';
import Upcoming from '../views/Upcoming';
import CinemaDetail from '../views/CinemaDetail';
import MovieDetail from '../views/MovieDetail';
import UpcomingDetail from '../views/UpcomingDetail';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Cinemas" component={Cinemas} />
      <Stack.Screen name="Upcoming" component={Upcoming} />
      <Stack.Screen name="CinemaDetail" component={CinemaDetail} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
      <Stack.Screen name="UpcomingDetail" component={UpcomingDetail} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
