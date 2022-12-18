import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { texto, botones, pantalla } from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

function IngresarScreen({ navigation }) {
    const [userNumber, setUserNumber] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={pantalla.base}>
            <Text style={[texto.titulo, { marginBottom: 75 }]}>INICIO DE SESIÓN</Text>
            <View>
                <Text style={texto.texto}>Número celular o No. de usuario</Text>
                <TextInput
                    placeholder='ej: (662)-290-9812    ó    0001 - 23'
                    style={texto.escribir}
                    onChangeText={(userNumber) => setUserNumber(userNumber)}
                    keyboardType='phone-pad'//'numeric'
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
            </View>
            <View>
                <TouchableOpacity
                    style={botones.inicio}
                    onPress={() => navigation.push('Menú')}>
                    <Text style={[botones.texto, { marginTop: 35 }]}>INICIAR SESIÓN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default IngresarScreen;