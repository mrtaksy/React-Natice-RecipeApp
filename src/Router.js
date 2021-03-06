import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {FootDetail, FootList,FootCategories} from './pages';
import { Header } from 'react-native/Libraries/NewAppScreen';


const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>

      <Stack.Screen name="List" component={FootList} />
      <Stack.Screen name="Kategori" component={FootCategories} />
      <Stack.Screen name="Detail" component={FootDetail} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;