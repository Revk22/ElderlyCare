import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { texto, botones, pantalla } from './styles';

function HomeScreen({ navigation }) {
  return (
    <View style={pantalla.base}>
      <Text style={texto.titulo}>ELDERLY CARE</Text>
      <Image style={texto.imagen} source={require('./logo.png')} />
      <View style={botones.inicio}>
        <Button
          title='Iniciar Sesion'
          onPress={() => navigation.navigate('Inicio de Sesión')} />
      </View>
      <View style={botones.inicio}>
        <Button
          title='Registrarse'
          onPress={() => navigation.navigate('Registrate')} />
      </View>
    </View>
  );
}

function IngresarScreen({ navigation }) {
  return (
    <View style={pantalla.base}>
      <Text style={[texto.titulo, { marginBottom: 75 }]}>INICIO DE SESIÓN</Text>
      <Text>Número celular o No. de usuario</Text>
      <View style={botones.continuar}>
        <Button
          title='Continuar   →'
          //** MODIFICAR */ Debe llevar al menú
          onPress={() => navigation.push('**')} />
      </View>
    </View>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <View style={pantalla.base}>
      <Text> Loading </Text>
      <Text> Ya casi terminamos ! </Text>
      <View style={botones.continuar}>
        <Button
          title='Continuar   →'
          onPress={() => navigation.push('Dificultades')} />
      </View>
    </View>
  );
}

function DificultadesScreen({ navigation }) {
  return (
    <View style={pantalla.base}>
      <Text> Loading </Text>
      <Text> Ya casi terminamos ! </Text>
      <View style={botones.continuar}>
        <Button
          title='Continuar   →'
          //** MODIFICAR */ Debe llevar a lo siguiente del formulario
          onPress={() => navigation.push('**')} />
      </View>
    </View>
  );
}


const Stack = createStackNavigator();

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
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}


