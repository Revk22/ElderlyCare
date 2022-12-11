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

  export default MenuScreen;