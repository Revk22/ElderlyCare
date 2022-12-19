import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { texto, botones, pantalla } from '../../styles';

function SOSScreen({ navigation }) {
  const [timesPressed, setTimesPressed] = useState(0);

  if (timesPressed == 3) {
    //navigation.push('Llamando')
    navigation.navigate('Llamando', {numero: '911'})
  } else if (timesPressed > 0) {
    //
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

