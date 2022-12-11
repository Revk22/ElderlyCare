import 'react-native-gesture-handler';
import {React} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './pages/HomeScreen';
import IngresarScreen from './pages/IngresarScreen';
import RegisterScreen from './pages/RegisterScreen';
import DificultadesScreen from './pages/DificultadesScreen';
import MenuScreen from './pages/MenuScreen';

const Stack = createStackNavigator();
//const Menu = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Elderly Care'
        screenOptions={{
          headerStyle: {
            backgroundColor: 'lightblue'
          },
          headerTintColor: 'black'
        }}>
        <Stack.Screen name="Elderly Care" component={HomeScreen} />
        <Stack.Screen name="Inicio de Sesión" component={IngresarScreen} />
        <Stack.Screen name='Registrate' component={RegisterScreen} />
        <Stack.Screen name='Dificultades' component={DificultadesScreen} />
        <Stack.Screen name='Menú' component={MenuScreen} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
