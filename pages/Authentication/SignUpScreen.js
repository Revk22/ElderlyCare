import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Alert, Button } from 'react-native';
import { texto, botones, pantalla } from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

//FIREBASE
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase/firebaseConfig';

export default function SignUp({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    // FIREBASE
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleSignUp = async () => {
        if (!email) {
            console.log('No se introdujo correo electronico');
            alert('Proporcione su correo electronico');
            return;
        }
        if (password != password2) {   // SI LAS CONTRASEÑAS SON IGUALES O NO 
            alert('Hay una discrepancia en las contraseñas');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Registrando nuevo usuario ...');
                console.log('Email:', email);
                console.log('Contraseña:', password);
                const user = userCredential.user;
                //console.log(user);
                Alert.alert('Éxito', 'Se ha registrado tu cuenta',
                    [
                        {
                            text: 'Aceptar',
                            onPress: () => navigation.navigate('PersonalizacionUsuario') //onPress: () => navigation.navigate('Seleccion de Usuario')  //onPress: () => navigation.navigate('Iniciar Sesion') 
                        },
                    ],
                    { cancelable: false });
            })
            .catch(error => {
                if (password.length < 6){
                    Alert.alert('Error','Use 6 o más caracteres con una combinación de letras, números y símbolos')
                }
                console.log(error)
            })
    };

    return (
        <View style={pantalla.base}>
            <View>
                <Text style={[texto.titulo, { marginBottom: 75, marginTop: 75 }]}> REGISTRATE </Text>

                <Text style={[texto.texto, { textAlign: 'left' }]}>Correo electrónico</Text>
                <TextInput
                    style={texto.escribir}
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <View>
                    <Text style={[texto.texto, { textAlign: 'left' }]}>Contraseña</Text>
                    <TextInput
                        style={texto.escribir}
                        placeholder="Contraseña"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                    <Ionicons
                        name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                        style={{ position: 'absolute', left: 220, top: 38, fontSize: 30 }}
                        onPress={() => setShowPassword(!showPassword)} />
                </View>
                <View>
                    <Text style={[texto.texto, { textAlign: 'left' }]}>Contraseña</Text>
                    <TextInput
                        style={texto.escribir}
                        placeholder="Contraseña"
                        secureTextEntry={!showPassword2}
                        value={password2}
                        onChangeText={text => setPassword2(text)}
                    />
                    <Ionicons
                        name={showPassword2 ? 'eye-outline' : 'eye-off-outline'}
                        style={{ position: 'absolute', left: 220, top: 38, fontSize: 30 }}
                        onPress={() => setShowPassword2(!showPassword2)} />
                </View>
            </View>
            <View>
                <TouchableOpacity
                    style={botones.inicio}
                    onPress={handleSignUp}>
                    <Text style={botones.texto}>REGISTRARSE</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

/*
const handleSignUp = () => {
        // Lógica de registro aquí
        console.log('Registrando nuevo usuario ...');
        console.log('Email:', email);
        console.log('Contraseña:', password);
    };
*/