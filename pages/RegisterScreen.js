import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { texto, botones, pantalla } from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

function RegisterScreen({ navigation }) {
    const [textoBasico, setTextoBasico] = useState('');
    const [textoPassword, setTextoPassword] = useState('');

    let iconName = '';
    if (iconName = true) {
      iconName = 'eye-outline';
    } else if (iconName = false) {
      iconName = 'eye-off-outline';
    }
    
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

  export default RegisterScreen;