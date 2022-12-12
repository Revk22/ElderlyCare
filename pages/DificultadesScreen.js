import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { texto, botones, pantalla } from '../styles';

function DificultadesScreen({ navigation }) {
    return (
      <View style={pantalla.base}>
        <Text style={[texto.titulo, { marginBottom: 20 }]}> DIFICULTADES </Text>
        <Text style={texto.subtitulo}>Selecciona cuáles de las siguientes enfermedades padece</Text>
        <Text style={texto.subtitulo}>Es importante conocer sobre tus padecimientos para que la aplicación se adapte a tus necesidades</Text>
        <View style={botones.continuar}>
          <TouchableOpacity
            onPress={() => navigation.push('PersonalizacionUsuario')}>
            <Text style={botones.texto}>Continuar   →</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  export default DificultadesScreen;