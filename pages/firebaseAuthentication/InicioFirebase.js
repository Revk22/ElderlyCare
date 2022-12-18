import 'react-native-gesture-handler';
import React, { useState, useRef } from 'react';
import { View, Text, Alert, TextInput, TouchableOpacity, Touchable } from 'react-native';
import { texto, botones, pantalla } from '../../styles';
// firebase configuration phone
//1er intento
//import { firebaseConfig } from '../../firebase/firebaseConfig';
//import firebase from 'firebase/compat/app';
//import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
//2do intento
//import auth from '@react-native-firebase/auth';
//3er intento
import { getAuth, createUsertWithPhoneNumber, signInWithPhoneNumber } from 'firebase/auth';
///??import { RecaptchaVerifier } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase/firebaseConfig';

function SignUp({ navigation }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () => {
        createUsertWithPhoneNumber(auth, phoneNumber, password)
        .then((userCredential) => {
            console.log('Account created!')
            const user = userCredential.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
            Alert.alert(error.message)
        })
    }

    const handleSignIn = () => {
        signInWithPhoneNumber(auth, phoneNumber, password)
        .then((userCredential) => {
            console.log('Signed in!')
            const user = userCredential.user;
            console.log(user)
            navigation.navigate('Menú');
        })
        .catch(error => {
            console.log (error)
        })
    }

    return (
        <View style={pantalla.base}>
            <Text style={[texto.titulo, { marginBottom: 75 }]}> REGISTRATE </Text>
            <TextInput
                placeholder='Número celular con lada'
                style={texto.escribir}
                onChangeText={() => setPhoneNumber(phoneNumber)}
                keyboardType='phone-pad'
            />
            <TextInput
                placeholder='Contraseña'
                style={texto.escribir}
                onChangeText={() => setPassword(password)}
                keyboardType='phone-pad'
            />
            <TouchableOpacity
                style={botones.inicio}  //MANDAR A OTRA PANTALLA? navigation.navigate('Confirmando Celular') ?
                onPress={handleCreateAccount}>
                <Text style={botones.texto}>Enviar Código de Verificacion(Registrarse)</Text>
            </TouchableOpacity>


            <TextInput
                placeholder='Escribir código'
                style={texto.escribir}
                onChangeText={setCode}
                keyboardType='phone-pad'
            />
            <TouchableOpacity
                style={botones.inicio}  // MANDAR A DIFICULLTADES navigation.navigate('Dificultades')
                onPress={handleSignIn}>
                <Text style={botones.texto}>
                    Confirmar Código(Login)</Text >
            </TouchableOpacity>

        </View>
    )
}

/*
function SignUp({ navigation }) {
    const recaptchaResponse = grecaptcha.getResponse(recaptchaWidgetId);
    const phoneNumber = getPhoneNumberFromUserInput();
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    auth.languageCode = 'es';
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignInSubmit();
        },
        'expired-callback': () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            console.log('e')// ...
        }
    }, auth);
    recaptchaVerifier.render().then((widgetId) => {
        window.recaptchaWidgetId = widgetId;
    });

    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            // ...
        }).catch((error) => {
            // Error; SMS not sent
            // ...
            grecaptcha.reset(window.recaptchaWidgetId);
            // Or, if you haven't stored the widget ID:
            window.recaptchaVerifier.render().then(function (widgetId) {
                grecaptcha.reset(widgetId);
            });
        });

    return (
        <View>
        </View>
    )
}
*//*
function SignUp({ navigation }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');

    const signInWithPhoneNumber = async (phoneNumber) => {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    const confirmCode = async () => {
        try {
            await confirm.confirm(code);
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    if (!confirm) {
        return (
            <View style={pantalla.base}>
            <Text style={[texto.titulo, { marginBottom: 75 }]}> REGISTRO POR NUMERO CELULAR </Text>
            <TextInput
                style={texto.escribir}
                onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                keyboardType='phone-pad' />
            <TouchableOpacity
                style={botones.inicio}
                onPress={() => signInWithPhoneNumber('+52 662 290 8187')}>
                <Text style={botones.texto}>Registrar Número Celular</Text>
            </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={pantalla.base}>
            <Text style={[texto.titulo, { marginBottom: 75 }]}> CORFIRMAR CODIGO </Text>
            <TextInput
                value={code}
                style={texto.escribir}
                onChangeText={text => setCode(text)}
                keyboardType='phone-pad' />
            <TouchableOpacity
                style={botones.inicio}
                onPress={() => confirmCode()}>
                <Text style={botones.texto}>Confirmar Código</Text>
            </TouchableOpacity>
        </View>
    )
}   */
/*
///////////////////
// Recaptcha Está obsoleto porque Expo está dejando de implementarlo
// Otra manera de probarlo para ser con Recaptcha es con:
// 1) Debe ser el método de complicación de desarrollo o método de compilación
// 2) Utilizar Android Studio
////////////////
// vvvvvvvvvvvvvvvvv
function SignUp({ navigation }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);

    const sendVerification = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
            .then(setVerificationId);
        setPhoneNumber('');
    }

    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
        firebase.auth().signInWithCredential(credential)
            .then(() => {
                setCode('');
            })
            .catch((error) => {
                alert(error);
            })

        Alert.alert('Éxito', 'Nuevo usuario registrado',
            [
                {
                    text: 'Aceptar',
                    onPress: () => navigation.push('Dificultades'),
                },
            ],
            { cancelable: false });
    }

    return (
        <View style={pantalla.base}>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />
            <Text style={[texto.titulo, { marginBottom: 75 }]}> REGISTRATE </Text>
            <TextInput
                placeholder='Número celular con lada'
                style={texto.escribir}
                onChangeText={setPhoneNumber}
                keyboardType='phone-pad'
            />
            <TouchableOpacity
                style={botones.inicio}  //MANDAR A OTRA PANTALLA? navigation.navigate('Confirmando Celular') ?
                onPress={sendVerification}>
                <Text style={botones.texto}>Enviar Código de Verificacion</Text>
            </TouchableOpacity>


            <TextInput
                placeholder='Escribir código'
                style={texto.escribir}
                onChangeText={setCode}
                keyboardType='phone-pad'
            />
            <TouchableOpacity
                style={botones.inicio}  // MANDAR A DIFICULLTADES navigation.navigate('Dificultades')
                onPress={confirmCode}>
                <Text style={botones.texto}>
                    Confirmar Código</Text >
            </TouchableOpacity>

        </View>
    )

}
*/
export default SignUp;