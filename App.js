import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Homescreen } from './screens/HomeScreen';
import Patient from './screens/NestedRoutes/Patient'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Пациенты" component={Homescreen}/>
            <Stack.Screen options={{headerShown: false}} name="Пациент" component={Patient}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}




