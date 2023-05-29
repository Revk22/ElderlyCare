import 'react-native-gesture-handler';
import {React} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

/*
import IngresarScreen from './pages/IngresarScreen';
import RegisterScreen from './pages/RegisterScreen';

        <Stack.Screen name="Inicio de Sesión" component={IngresarScreen} />
        <Stack.Screen name='Registrate' component={RegisterScreen} />

*/
import SeleccionID from './pages/SeleccionID';
import DificultadesScreen from './pages/DificultadesScreen';
import MenuScreen from './pages/MenuScreen';
import PersonalizacionUsuario from './pages/PersonalizacionUsuario';
import SOSScreen from './pages/Menu pages/SOSScreen';
import Call_SOS from './pages/Menu pages/CallScreen';
import ContactsScreen from './pages/Menu pages/ContactsScreen';
import ManualCallsScreen from './pages/Menu pages/ManualCallScreen';
import MedicineScreen from './pages/Menu pages/MedicineScreen';

import SignUp from './pages/Authentication/SignUpScreen';
import LogIn from './pages/Authentication/LogInScreen';

import Pruebas from './pages/SinUsoTemporal-Pruebas/Pruebas.js';

const Stack = createStackNavigator();
//const Menu = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Iniciar Sesion'
        screenOptions={{
          headerStyle: {
            backgroundColor: 'lightblue'
          },
          headerTintColor: 'black'
        }}>
        
        <Stack.Screen name='Iniciar Sesion' component={LogIn} />
        <Stack.Screen name='Nueva cuenta' component={SignUp} />

        <Stack.Screen name='Seleccion de Usuario' component={SeleccionID} />

        <Stack.Screen name='Pruebas' component={Pruebas} />

        <Stack.Screen name='Dificultades' component={DificultadesScreen} />
        <Stack.Screen name='PersonalizacionUsuario' component={PersonalizacionUsuario} />
        <Stack.Screen name='Menú' component={MenuScreen} options={{headerLeft: (props) => null}} />
        <Stack.Screen name='Menú SOS' component={SOSScreen} />
        <Stack.Screen name='Llamando' component={Call_SOS} options={{headerLeft: (props) => null}} />
        <Stack.Screen name='Menú Contacts' component={ContactsScreen} />
        <Stack.Screen name='Menú Calls' component={ManualCallsScreen} />
        <Stack.Screen name='Menú Medicine' component={MedicineScreen} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}

/*

// TEMPORALMENTE FUNCIONAL - INICIO DE SESION - NO MODIFICAR - HomeScreen.js //
import HomeScreen from './pages/HomeScreen';
<Stack.Screen name="Elderly Care" component={HomeScreen} />

*/