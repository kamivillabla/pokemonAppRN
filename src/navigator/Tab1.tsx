import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {SimplePokemon} from '../interface/pokemonInterfaces';
import {HomeScreen} from '../screen/HomeScreen';
import {PokemonScreen} from '../screen/PokemonScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: {simplePokemon: SimplePokemon; color: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const Tab1 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
};
