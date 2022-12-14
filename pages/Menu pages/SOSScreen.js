import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Pressable } from 'react-native';
import { texto, botones, pantalla } from '../../styles';
import Call_SOS from './CallScreen';
 
function SOSScreen({ navigation }) {
  const [timesPressed, setTimesPressed] = useState(0);

  //let textLog = '';
  let numero = '911';
  if (timesPressed == 3) {
    navigation.push('Llamando')
    //<Call_SOS numero = {'911'} />
  } else if (timesPressed > 0) {
    //textLog = 'onPress';
  }

  return (
    <View style={pantalla.base}>
      <Text style={[texto.titulo, { marginBottom: 20 }]}> ESTOY EN UNA EMERGENCIA </Text>
      <Text style={texto.subtitulo}>Al presionar 3 veces el boton SOS, estarás </Text>
      <Text style={texto.subtitulo}>solicitando asistencia  en el lugar donde estés</Text>
      <View>
        <Pressable
          onPress={() => {
            setTimesPressed((current) => current + 1);
          }}
          // No me funciona el style al presionar :c
          style={({ pressed }) => [ 
            {
              backgroundColor: pressed
                ? '#F41C1C'
                : 'FF4444'
            },
            botones.sos
          ]}
        >
          <Text
            style={{ fontSize: 80, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>SOS</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default SOSScreen;

/* 
return (
    <View style={pantalla.base}>
      <Text style={[texto.titulo, { marginBottom: 20 }]}> ESTOY EN UNA EMERGENCIA </Text>
      <Text style={texto.subtitulo}>Al presionar 3 veces el boton SOS, estarás </Text>
      <Text style={texto.subtitulo}>solicitando asistencia  en el lugar donde estés</Text>
      <View>
        <TouchableOpacity
          style={botones.sos}
          onPress={() => navigation.push('Llamando')}>
          <Text
            style={{ fontSize: 80, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>SOS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
*/
