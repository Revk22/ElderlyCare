import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { texto, botones, pantalla } from '../../styles';

function SOSScreen({ navigation }) {
  const [timesPressed, setTimesPressed] = useState(0);

  //let textLog = '';
  if (timesPressed == 3) {
    navigation.push('Llamando')
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
          // No me funciona el style :c
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