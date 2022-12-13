import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { texto, botones, pantalla } from '../../styles';

function ContactsScreen({ navigation }) {
  return (
    <View style={pantalla.base}>
      <Text style={[texto.titulo, { marginBottom: 20 }]}> CONTACTOS </Text>
      <Text style={botones.contactos}>Hija</Text>
      <Text style={botones.contactos}>Hijo</Text>
      <View>
      </View>
    </View>
  );
}

export default ContactsScreen;