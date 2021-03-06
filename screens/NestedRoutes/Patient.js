import 'react-native-gesture-handler';
import React from 'react';

import { Patientscreen } from '../PatientScreen';
import { Formulatooth }  from '../FormulaTooth';
import { createStackNavigator } from '@react-navigation/stack';

const FeedStack = createStackNavigator();

export default function Patient({route}) {
  return (
        <FeedStack.Navigator>
            <FeedStack.Screen name="Карта Пациента" component={Patientscreen}/>
            <FeedStack.Screen name="Формула зубов" component={Formulatooth}/>
        </FeedStack.Navigator>
  );
}




