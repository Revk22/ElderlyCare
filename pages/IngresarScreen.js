import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { texto, botones, pantalla } from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

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

  let iconName = '';
if (iconName = true) {
  iconName = 'eye-outline';
} else if (iconName = false) {
  iconName = 'eye-off-outline';
}

export default IngresarScreen;