import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import { texto, botones, pantalla } from '../styles';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

//FIREBASE
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/firebaseConfig';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';

const SeleccionID = ({ route, navigation }) => {
    // FIREBASE
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore();

    const { referencia } = route.params;
    //console.log(referencia);

    const handleActualizacionUsuario = async (datos) => {
        // Realizar acciones de actualización con los datos proporcionados
        console.log('Datos actualizados:', datos);

        try {
            const { tipoUsuario } = datos;
            const userDocRef = doc(db, 'users', referencia);
            await updateDoc(userDocRef, { tipoUsuario: tipoUsuario });
            console.log('Documento actualizado en Firestore');
            if (tipoUsuario == 'Adulto Mayor') {
                //navigation.push('Dificultades')
                navigation.push('Dificultades', { referencia: referencia })
            } else {
                navigation.push('Menú', { referencia: referencia })
            }
        } catch (error) {
            console.error('Error al actualizar el documento:', error);
        }
    };

    return (
        <View style={pantalla.base}>
            <View >
                <Text style={[texto.titulo]}> TIPO DE USUARIO </Text>
                <Text style={[texto.subtitulo, { marginTop: 50 }]}>Selecciona el tipo de usuario quien utilizará la aplicación</Text>
            </View>

            <TouchableOpacity
                style={[botones.usuarios, { marginTop: 40 }]}
                onPress={() => handleActualizacionUsuario({ tipoUsuario: 'Adulto Mayor' })}>
                <MaterialIcons name="accessible" size={60} color="white" />
                <Text style={[texto.boton, { marginTop: 15 }, { fontSize: 16 }]}>Adulto mayor</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[botones.usuarios, { marginTop: 40 }]}
                onPress={() => handleActualizacionUsuario({ tipoUsuario: 'Cuidador' })}>
                
                <MaterialCommunityIcons name="face-man" size={70} color="white" />
                <Text style={[texto.boton, { marginTop: 15 }, { fontSize: 16 }]}>   Cuidador   </Text>
            </TouchableOpacity>

        </View>
    );
}

export default SeleccionID;

//<MaterialIcons name="directions-walk" size={60} color="white" />