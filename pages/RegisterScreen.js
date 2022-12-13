import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { texto, botones, pantalla } from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

//////// FIREBASE
import db from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
///////////////////

function RegisterScreen({ navigation }) {
    const [userNumber, setUserNumber] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userPassword2, setUserPassword2] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    //////// FIREBASE
    let registro_usuario = async () => {
        console.log(userNumber, userPassword, userPassword2);

        if (!userNumber) {
            alert('Proporcione su número celular');
            return;
        }
        if (!userPassword) {
            alert('Proporcione una contraseña');
            return;
        }
        if (!userPassword2) {
            alert('Proporcione una contraseña');
            return;
        }
        if (userPassword != userPassword2) {   // SI LAS CONTRASEÑAS SON IGUALES O NO 
            alert('Hay una discrepancia en las contraseñas');
            return;
        }
        try {
            const docRef = await addDoc(collection(db, 'users'), {
                contact: userNumber,
                password: userPassword
            });
            console.log('Se registró un usuario en firestore con Id: ', docRef.id);
            Alert.alert('Éxito', 'Nuevo usuario registrado',
                [
                    {
                        text: 'Aceptar',
                        onPress: () => navigation.push('Dificultades'),
                    },
                ],
                { cancelable: false });
        } catch (error) {
            alert('Error al intentar agregar un nuevo usuario');
            console.log('Error al guardar en firestore ', error);
        }
    }
    ////////////////////////////////

    return (
        <View style={pantalla.base}>
            <Text style={[texto.titulo, { marginBottom: 75 }]}> REGISTRATE </Text>
            <View>
                <Text style={texto.texto}>Número celular</Text>
                <TextInput
                    placeholder='ej: (662)-290-9812'
                    style={texto.escribir}
                    onChangeText={(userNumber) => setUserNumber(userNumber)}
                    keyboardType='numeric'
                />
                <Text style={texto.texto}>Contraseña</Text>
                <View>
                    <TextInput
                        placeholder='*********'
                        style={texto.escribir}
                        onChangeText={(userPassword) => setUserPassword(userPassword)}
                        password={true}
                        secureTextEntry={!showPassword}
                    />
                    <Ionicons
                        name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                        style={{ position: 'absolute', left: 220, top: 17, fontSize: 30 }}
                        onPress={() => setShowPassword(!showPassword)} />
                </View>
                <Text style={texto.texto}>Confirmar contraseña</Text>
                <View>
                    <TextInput
                        placeholder='*********'
                        style={texto.escribir}
                        onChangeText={(userPassword2) => setUserPassword2(userPassword2)}
                        password={true}
                        secureTextEntry={!showPassword2}
                    />
                    <Ionicons
                        name={showPassword2 ? 'eye-off-outline' : 'eye-outline'}
                        style={{ position: 'absolute', left: 220, top: 17, fontSize: 30 }}
                        onPress={() => setShowPassword2(!showPassword2)} />
                </View>
            </View>
            <View>
                <TouchableOpacity
                    style={botones.inicio}
                    onPress={registro_usuario}>
                    <Text style={botones.texto}>REGISTRARSE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default RegisterScreen;