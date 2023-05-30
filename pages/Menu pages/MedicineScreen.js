import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert , Button} from 'react-native';
import { texto, botones, pantalla } from '../../styles';
import Icon from 'react-native-vector-icons/Fontisto';
import Checkbox from 'expo-checkbox';
import { green } from '@mui/material/colors';



const MedicineScreen = ({ route, navigation }) => {
    const [isChecked, setChecked] = useState(false);
    const [isChecked2, setChecked2] = useState(false);

    const { referencia } = route.params;

    return (
        <View style={[pantalla.base, { alignItems: 'center' }]}>

            <View style={{ flexDirection: "row" }}>

                <Icon
                    name={'test-bottle'}
                    color="black"
                    style={{ fontSize: 60, marginTop: 40, marginRight: 10 }}
                />
                <Text style={[texto.titulo]}> MEDICAMENTOS </Text>
                
            </View>
            
            <Text style={texto.subtitulo}>Para un buen seguimiento de medicamentos, inserte su tratamiento actual</Text>


            <Text style={[texto.subtitulo,{ marginTop: 80,marginRight: 260,}]}>Activos</Text>

            <View style={{ flexDirection: "row" }}>
                <Text style={[texto.subtitulo, { marginRight: 50,marginTop: 60 }]}>Medicamento 1</Text>
                <Checkbox
                    style={{ marginTop: 64 }}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#64BAFC' : undefined}
                />
            </View>

            <View style={{ flexDirection: "row" }}>
                <Text style={[texto.subtitulo, { marginRight: 50,marginTop: 80 }]}>Medicamento 2</Text>

                <Checkbox
                    style={{ marginTop: 84 }}
                    value={isChecked2}
                    onValueChange={setChecked2}
                    color={isChecked2 ? '#64BAFC' : undefined}
                />
            </View>

            <View style={{ marginTop: 100 }}>
                <TouchableOpacity
                    onPress={() => navigation.push('Menú', {referencia: referencia})}>
                    <Text style={botones.texto}>Agregar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}


export default MedicineScreen;