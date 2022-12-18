import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { texto, botones, pantalla } from '../../styles';

function ContactsScreen({ navigation }) {
  return (
    <View style={pantalla.base}>
      <Text style={[texto.titulo, { marginBottom: 20 }]}> CONTACTOS </Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <TouchableOpacity
        style={botones.contactos}
        onPress={() => navigation.push('Llamando', { numero: 'Mary Hija' })}>
        <Text>Mary Hija</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={botones.contactos}
        onPress={() => navigation.push('Llamando', { numero: 'Jesus Hijo' })}>
        <Text>Jesus Hijo</Text>
      </TouchableOpacity>

      <TouchableOpacity
      // FALTAN MAS CONTACTOS CON EL MISMO FORMATO QUE ARRIBA , 
      // SOLO COPIAR Y CAMBIAR EL NOMBRE (TOUCHABLEOPACITY Y TEXT)
      // + IMAGEN/ICONO
      ></TouchableOpacity>


      </View>
    </View>
  );
}

export default ContactsScreen;