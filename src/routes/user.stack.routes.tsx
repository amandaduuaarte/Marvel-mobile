import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Character } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

export function UserStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="Character" component={Character} />
    </Navigator>
  );
}
