import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { texto, botones, pantalla } from '../styles';

import Icon from 'react-native-vector-icons/Fontisto';  // MEDICINA
import { MaterialCommunityIcons } from '@expo/vector-icons';  //SOS
import { Foundation } from '@expo/vector-icons';  //CONTACTOS
import { Feather } from '@expo/vector-icons';   //LLAMADAS
import { MaterialIcons } from '@expo/vector-icons';

function MenuScreen({ navigation }) {
  return (
    <View style={pantalla.base}>
      <Text style={[pantalla.frame, { textAlign: 'center', textAlignVertical: 'center' }]}> AQUI VA LA HORA  </Text>
      <Text style={[texto.titulo, { marginBottom: 20 }]}> MENU </Text>
      <Text style={texto.subtitulo}>
        HOLA SOY UN MENU
      </Text>
      <View>
        <TouchableOpacity
          style={[botones.menu, { right: 80 }]}
          onPress={() => navigation.push('Menú SOS')}>
          <MaterialCommunityIcons
            name="car-emergency"
            size={50}
            color="#F41C1C"
            style={{ marginBottom: 10 }}
          />
          <Text style={texto.boton}>Botón de pánico</Text><Text style={texto.boton}>para emergencias</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[botones.menu, { left: 80, bottom: 120 }]}
          onPress={() => navigation.push('Menú Contacts')}>
          <Foundation
            name="torsos-all"
            size={50}
            color="black"
            style={{ marginBottom: 10 }}
          />
          <Text style={texto.boton}>Contactos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[botones.menu, { right: 80, bottom: 100 }]}
          onPress={() => navigation.push('Menú Calls')}>
          <Feather
            name="phone-call"
            size={50}
            color="black"
            style={{ marginBottom: 10 }}
          />
          <Text style={texto.boton}>Contactos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[botones.menu, { left: 80, bottom: 220 }]}
          onPress={() => navigation.push('Menú Medicine')}>
          <Icon
            name={'test-bottle'}
            style={{ fontSize: 55, marginBottom: 10 }}
          />
          <Text style={texto.boton}>Contactos</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1, position: 'absolute'}}>
      <MaterialIcons name="account-box" size={60} color="black" />
      </View>
    </View>
  );
}

export default MenuScreen;