import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { texto, botones, pantalla } from '../styles';
import Icon from 'react-native-vector-icons/Fontisto';
//import SosIcon from '@mui/icons-material/Sos'; // ES PARA BOTON DE SOS

function MenuScreen({ navigation }) {
    return (
      <View style={pantalla.base}>
        <Text style={[pantalla.frame, {textAlign: 'center', textAlignVertical: 'center'}]}> AQUI VA LA HORA  </Text>
        <Text style={[texto.titulo, { marginBottom: 20 }]}> MENU </Text>
        <Text style={texto.subtitulo}>
          HOLA SOY UN MENU
        </Text>
        <View>
        <TouchableOpacity
        style={[botones.menu, {right: 80}]}
        onPress={() => navigation.push('Menú SOS')}>

          <Text>Botón de pánico</Text><Text>para emergencias</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={[botones.menu, {left: 80, bottom: 120}]}
        onPress={() => navigation.push('Menú Contacts')}>

          <Text>Contactos</Text>
        </TouchableOpacity>
        <Icon 
        name={'test-bottle'}
        style = {{fontSize: 55}} />
        </View>
      </View>
    );
  }

  export default MenuScreen;