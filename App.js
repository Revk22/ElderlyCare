import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { texto, botones, pantalla } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import Pressable from 'react-native';

//comentario tonto

function HomeScreen({ navigation }) {
  return (
    <View style={pantalla.base}>
      <Text style={texto.titulo}>ELDERLY CARE</Text>
      <Image style={texto.imagen} source={require('./logo.png')} />
      <View>
        <TouchableOpacity style={botones.inicio}
          onPress={() => navigation.navigate('Inicio de Sesión')} >
          <Text style={botones.texto}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={botones.inicio}
          onPress={() => navigation.navigate('Registrate')}>
          <Text style={botones.texto}>REGISTRARSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

let iconName = '';
if (iconName = true) {
  iconName = 'eye-outline';
} else if (iconName = false) {
  iconName = 'eye-off-outline';
}

function IngresarScreen({ navigation }) {
  const [textoBasico, setTextoBasico] = useState('salida con texto');
  const [textoPassword, setTextoPassword] = useState('holahola');
  return (
    <View style={pantalla.base}>
      <Text style={[texto.titulo, { marginBottom: 75 }]}>INICIO DE SESIÓN</Text>
      <View>
        <Text style={texto.texto}>Número celular o No. de usuario</Text>
        <TextInput
          placeholder='ej: (662)-290-9812    ó    0001 - 23'
          style={texto.escribir}
          onChangeText={(text) => setTextoBasico(text)}
        />
        <Text style={texto.texto}>Contraseña</Text>
        <View>
          <TextInput
            placeholder='*********'
            style={texto.escribir}
            onChangeText={(text) => setTextoPassword(text)}
            secureTextEntry
          />
          <Ionicons
            name={iconName}
            style={{ position: 'absolute', left: 230, top: 25 }} />
        </View>
      </View>
      <View>
        <TouchableOpacity style={botones.inicio}
          //** MODIFICAR */ Debe llevar al menú
          onPress={() => navigation.push('Menú')}>
          <Text style={[botones.texto, { marginTop: 35 }]}>INICIAR SESIÓN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function RegisterScreen({ navigation }) {
  const [textoBasico, setTextoBasico] = useState('');
  const [textoPassword, setTextoPassword] = useState('');
  return (
    <View style={pantalla.base}>
      <Text style={[texto.titulo, { marginBottom: 75 }]}> REGISTRATE </Text>
      <View>
        <Text style={texto.texto}>Número celular</Text>
        <TextInput
          placeholder='ej: (662)-290-9812'
          style={texto.escribir}
          onChangeText={(text) => setTextoBasico(text)}
        />
        <Text style={texto.texto}>Contraseña</Text>
        <View>
          <TextInput
            placeholder='*********'
            style={texto.escribir}
            onChangeText={(text) => setTextoPassword(text)}
            secureTextEntry
          />
          <Ionicons name={iconName} style={{ position: 'absolute', left: 230, top: 25 }} />
        </View>
        <Text style={texto.texto}>Confirmar contraseña</Text>
        <View>
          <TextInput
            placeholder='*********'
            style={texto.escribir}
            onChangeText={(text) => setTextoPassword(text)}
            secureTextEntry
          />
          <Ionicons name={iconName} style={{ position: 'absolute', left: 230, top: 25 }} />
        </View>
      </View>
      <View>
        <TouchableOpacity style={botones.inicio}
          onPress={() => navigation.push('Dificultades')}>
          <Text style={botones.texto}>REGISTRARSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DificultadesScreen({ navigation }) {
  return (
    <View style={pantalla.base}>
      <Text style={[texto.titulo, { marginBottom: 20 }]}> DIFICULTADES </Text>
      <Text style={texto.subtitulo}>Selecciona cuáles de las siguientes enfermedades padece</Text>
      <Text style={texto.subtitulo}>Es importante conocer sobre tus padecimientos para que la aplicación se adapte a tus necesidades</Text>
      <View style={botones.continuar}>
        <TouchableOpacity
          onPress={() => navigation.push('Menú')}>
          <Text style={botones.texto}>Continuar   →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function MenuScreen({ navigation }) {
  return (
    <View style={pantalla.base}>
      <Text style={pantalla.frame}>   </Text>
      <Text style={[texto.titulo, { marginBottom: 20 }]}> MENU </Text>
      <Text style={texto.subtitulo}>
        HOLA SOY UN MENU
      </Text>
    </View>
  );
}


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
