import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { texto, botones, pantalla,datepicker } from '../styles';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import RadioButtonRN from 'radio-buttons-react-native';


function PersonalizacionUsuario({ navigation }) {
    const [textoBasico, setTextoBasico] = useState('salida con texto');

    const data = [
        {
            label: 'F',
            accessibilityLabel: 'Femenino'
        },
        {
            label: 'M',
            accessibilityLabel: 'Masculino'
        }
    ];

    return (
        <ScrollView>
            <View style={pantalla.base}>

                <Text style={[texto.titulo, { marginBottom: 20 }]}> PERFIL DEL USUARIO </Text>
                <Text style={texto.subtitulo}>Es obligatorio que escribas tu información para en caso de emergencia</Text>

                <View>
                    <Text style={[texto.texto, { marginTop: 50 }]}>Nombre Completo</Text>
                    <TextInput
                        style={texto.escribir}
                        onChangeText={(text) => setTextoBasico(text)}
                    />
                    <Text style={[texto.texto, { marginTop: 10 }]}>Edad</Text>
                    <TextInput
                        style={texto.escribir}
                        onChangeText={(text) => setTextoBasico(text)}
                    />

                    <View>
                        <Text style={[texto.texto, { marginTop: 10 }]}>Genero</Text>
                        <RadioButtonRN
                            data={data}
                            selectedBtn={(e) => console.log(e)}
                        />
                    </View>

                    <Text style={[texto.texto, { marginTop: 10 }]}>Edad</Text>
                    <TextInput
                        style={texto.escribir}
                        onChangeText={(text) => setTextoBasico(text)}
                    />

                    <Text style={[texto.texto, { marginTop: 10 }]}>Edad</Text>
                    <TextInput
                        style={texto.escribir}
                        onChangeText={(text) => setTextoBasico(text)}
                    />
                    
                    



                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity
                            onPress={() => navigation.push('Menú')}>
                            <Text style={botones.texto}>Continuar   →</Text>
                        </TouchableOpacity>
                    </View>
                </View>



            </View>
        </ScrollView>
    );
}

export default PersonalizacionUsuario;