import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { texto, botones, pantalla } from '../../styles';

const SOSScreen = ({ route, navigation }) => {
  const [timesPressed, setTimesPressed] = useState(0);
  const { referencia } = route.params;

  if (timesPressed == 3) {
    //navigation.push('Llamando')
    navigation.navigate('Llamando', { numero: '911', referencia })
  } else if (timesPressed > 0) {
    //
  }

  const handleSOSPress = () => {
    setTimesPressed((current) => current + 1);
  }

  return (
    <View style={pantalla.base}>
      <Text style={[texto.titulo, { marginBottom: 20 }]}> ESTOY EN UNA EMERGENCIA </Text>
      <Text style={texto.subtitulo}>Al presionar 3 veces el boton SOS, estarás </Text>
      <Text style={texto.subtitulo}>solicitando asistencia  en el lugar donde estés</Text>
      <View>
        <Pressable
          onPress={handleSOSPress}
          // No me funciona el style al presionar :c
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#F41C1C' : 'FF4444',
              opacity: pressed ? 0.5 : 1,
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

