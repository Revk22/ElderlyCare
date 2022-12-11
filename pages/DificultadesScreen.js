import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { texto, botones, pantalla } from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import Pressable from 'react-native';

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

  export default DificultadesScreen;