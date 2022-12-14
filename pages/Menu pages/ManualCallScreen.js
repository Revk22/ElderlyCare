import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { texto, botones, pantalla } from '../../styles';

function ManualCallsScreen({ navigation }) {

    return (
        <View style={[pantalla.base, { alignItems: 'center' }]}>
            <Text style={[texto.subtitulo, { top: 80, fontSize: 30 }]}>VENTANA LLAMADA</Text>
        </View>
    );
}


export default ManualCallsScreen;