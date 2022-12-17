import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { texto, botones, pantalla } from '../../styles';
import Icon from 'react-native-vector-icons/Fontisto';


function MedicineScreen({ navigation }) {

    return (
        <View style={[pantalla.base, { alignItems: 'center' }]}>
            <Icon
                name={'test-bottle'}
                color="black"
                style={{ fontSize: 60, marginBottom: 10, }}
            />
            <Text style={[texto.titulo]}> MEDICAMENTOS </Text>
            <Text style={[texto.subtitulo, { top: 50, fontSize: 30 }]}>VENTANA MEDICINA</Text>
        </View>
    );
}


export default MedicineScreen;