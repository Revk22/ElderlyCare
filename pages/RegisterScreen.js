import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { texto, botones, pantalla } from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

function RegisterScreen({ navigation }) {
    const [textoNumerico, setTextoNumerico] = useState('');
    const [textoPassword, setTextoPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
   
    return (
      <View style={pantalla.base}>
        <Text style={[texto.titulo, { marginBottom: 75 }]}> REGISTRATE </Text>
        <View>
          <Text style={texto.texto}>Número celular</Text>
          <TextInput
            placeholder='ej: (662)-290-9812'
            style={texto.escribir}
            onChangeText={(text) => setTextoNumerico(text)}
            keyboardType='numeric'
          />
          <Text style={texto.texto}>Contraseña</Text>
          <View>
            <TextInput
              placeholder='*********'
              style={texto.escribir}
              onChangeText={(text) => setTextoPassword(text)}
              password={true}
              secureTextEntry={!showPassword}
            />
            <Ionicons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              style={{ position: 'absolute', left: 230, top: 25 }}
              onPress={() => setShowPassword(!showPassword)} />
          </View>
          <Text style={texto.texto}>Confirmar contraseña</Text>
          <View>
            <TextInput
              placeholder='*********'
              style={texto.escribir}
              onChangeText={(text) => setTextoPassword(text)}
              password={true}
              secureTextEntry={!showPassword}
            />
            <Ionicons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              style={{ position: 'absolute', left: 230, top: 25 }}
              onPress={() => setShowPassword(!showPassword)} />
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