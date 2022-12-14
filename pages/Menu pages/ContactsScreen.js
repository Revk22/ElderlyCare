import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { texto, botones, pantalla } from '../../styles';

function ContactsScreen({ navigation }) {
  return (
    <View style={pantalla.base}>
      <Text style={[texto.titulo, { marginBottom: 20 }]}> CONTACTOS </Text>
      <TouchableOpacity style={botones.contactos} onPress={() => navigation.push('Llamando')}>
        <Text>Hija</Text>
        </TouchableOpacity>
        <TouchableOpacity style={botones.contactos} onPress={() => navigation.push('Llamando')}>
      <Text>Hijo</Text>
      </TouchableOpacity>
      <View>
      </View>
    </View>
  );
}

export default ContactsScreen;