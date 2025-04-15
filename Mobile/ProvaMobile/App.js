import React from 'react';
import {View,Button,TextInput,StyleSheet,Text} from 'react-native';
import Login from './screens/Login';
import Estoque from './screens/Estoque';

import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Fale from './screens/Fale';

const Drawer = createDrawerNavigator();

function Drawwer() {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name='Estoques' component={Estoque}/>
      <Drawer.Screen name='Fale' component={Fale}/>
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();
  
function Sttack() {
  return(
    <Stack.Navigator>
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name='Estoque' component={Drawwer} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}



export default function App() {
  return (
      <NavigationContainer>
        <Sttack/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
