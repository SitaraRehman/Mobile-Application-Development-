import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import WinterScreen from './screens/WinterScreen';
import WinterPretScreen from './screens/WinterPretScreen';
import WinterUnstitchedScreen from './screens/WinterUnstitchedScreen';
import SummerScreen from './screens/SummerScreen';
import SummerPretScreen from './screens/SummerPretScreen';
import SummerUnstitchedScreen from './screens/SummerUnstitchedScreen';
import PerfumesScreen from './screens/PerfumesScreen';
import PerfumesMenScreen from './screens/PerfumesMenScreen';
import PerfumesWomenScreen from './screens/PerfumesWomenScreen';
import SaleScreen from './screens/SaleScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2c3e50',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Shopping App' }}
        />
        <Stack.Screen 
          name="Winter" 
          component={WinterScreen}
          options={{ title: 'Winter Collection' }}
        />
        <Stack.Screen 
          name="WinterPret" 
          component={WinterPretScreen}
          options={{ title: 'Winter Pret' }}
        />
        <Stack.Screen 
          name="WinterUnstitched" 
          component={WinterUnstitchedScreen}
          options={{ title: 'Winter Unstitched' }}
        />
        <Stack.Screen 
          name="Summer" 
          component={SummerScreen}
          options={{ title: 'Summer Collection' }}
        />
        <Stack.Screen 
          name="SummerPret" 
          component={SummerPretScreen}
          options={{ title: 'Summer Pret' }}
        />
        <Stack.Screen 
          name="SummerUnstitched" 
          component={SummerUnstitchedScreen}
          options={{ title: 'Summer Unstitched' }}
        />
        <Stack.Screen 
          name="Perfumes" 
          component={PerfumesScreen}
          options={{ title: 'Perfumes' }}
        />
        <Stack.Screen 
          name="PerfumesMen" 
          component={PerfumesMenScreen}
          options={{ title: 'Men Perfumes' }}
        />
        <Stack.Screen 
          name="PerfumesWomen" 
          component={PerfumesWomenScreen}
          options={{ title: 'Women Perfumes' }}
        />
        <Stack.Screen 
          name="Sale" 
          component={SaleScreen}
          options={{ title: 'Sale Items' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

