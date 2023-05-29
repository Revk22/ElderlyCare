import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import { texto, botones, pantalla } from '../styles';
import { MaterialIcons } from '@expo/vector-icons'; 




function SeleccionID({ navigation }) {



    return (
        <ScrollView>
            <View style={pantalla.base}>
                <View>
                    <Text style={[texto.titulo]}> TIPO DE USUARIO </Text>
                    <Text style={[texto.subtitulo, { marginTop: 50 }]}>Selecciona el tipo de usuario quien utilizará la aplicación</Text>
                </View>

                <TouchableOpacity
                    style={[botones.usuarios,{marginTop:40}]}
                    //onPress={() => navigation.push('Menú')}>
                    onPress={() => navigation.push('Dificultades')}>
                    <MaterialIcons name="elderly" size={60} color="white" />
                    <Text style={[texto.boton, {marginTop:15},{fontSize:16}]}>Adulto mayor</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[botones.usuarios,{marginTop:40}]}
                    onPress={() => navigation.push('Menú')}>
                    <MaterialIcons name="elderly" size={60} color="white" />
                    <Text style={[texto.boton, {marginTop:15},{fontSize:16}]}>   Cuidador   </Text>
                </TouchableOpacity>
                
            </View>
        </ScrollView>
    );
}

export default SeleccionID;
