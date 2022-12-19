import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { texto, botones, pantalla } from '../styles';

import Icon from 'react-native-vector-icons/Fontisto';  // MEDICINA
import { MaterialCommunityIcons } from '@expo/vector-icons';  //SOS
import { Foundation } from '@expo/vector-icons';  //CONTACTOS
import { Feather } from '@expo/vector-icons';   //LLAMADAS
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


function MenuScreen({ navigation }) {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    setCurrentDate(
      hours + ':' + min
    );
  }, []);

  return (
    <View style={pantalla.base}>

      <View style={[pantalla.frame, { flexDirection: "row", justifyContent: "center", alignItems: 'center' }]}>
        <Entypo name="stopwatch" size={75} color="black" />
        <Text style={[{ fontSize: 50 }]}> {currentDate}  </Text>
      </View>



      <View >
        <TouchableOpacity
          style={[botones.menu, { right: 80 }]}
          onPress={() => navigation.push('Menú SOS')}>
          <MaterialCommunityIcons
            name="car-emergency"
            size={60}
            color="#F41C1C"
            style={{ marginBottom: 10 }}
          />
          <Text style={texto.boton}>Botón de pánico</Text><Text style={texto.boton}>para emergencias</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[botones.menu, { left: 80, bottom: 179 }]}
          onPress={() => navigation.push('Menú Contacts')}>
          <Foundation
            name="torsos-all"
            size={60}
            color="white"
            style={{ marginBottom: 10 }}
          />
          <Text style={texto.boton}>Contactos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[botones.menu, { right: 80, bottom: 160 }]}
          onPress={() => navigation.push('Menú Calls')}>
          <Feather
            name="phone-call"
            size={60}
            color="white"
            style={{ marginBottom: 10 }}
          />
          <Text style={texto.boton}>Llamadas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[botones.menu, { left: 80, bottom: 340 }]}
          onPress={() => navigation.push('Menú Medicine')}>
          <Icon
            name={'test-bottle'}
            color="white"
            style={{ fontSize: 60, marginBottom: 10, }}
          />
          <Text style={texto.boton}>Medicamentos</Text>
        </TouchableOpacity>

      </View>

      <View style={[pantalla.frame, { position: 'absolute', bottom: 0, marginBottom: 5 }]}></View>

      <SafeAreaView style={{ position: 'absolute' , alignSelf: 'flex-start', bottom: 10, left:30}}>
        <MaterialIcons name="account-box" size={80} color="black" />
        </SafeAreaView> 
        <View style={{position: 'absolute', alignSelf: 'flex-start', bottom: 8, right: 60}}>
        <Text style={texto.menu}>Nombre Completo</Text>
        <Text style={texto.menu}>xxxxxxxxxxxxxxxxxxxxxxxx</Text>
        <Text style={texto.menu}>Número de Usuario</Text>
        <Text style={texto.menu}>lalalalala</Text>
        </View>

        
    </View>

  );
}

export default MenuScreen;