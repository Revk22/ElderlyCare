import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { texto, botones, pantalla } from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

//FIREBASE
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase/firebaseConfig';
import { getFirestore, collection, addDoc, setDoc, doc } from 'firebase/firestore';

function HomeScreen({ navigation }) {
  const [uid, setUid] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore();
  //console.log(auth)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // El usuario está autenticado
        //console.log('');
        const userUid = user.uid;
        const userEmail = user.email;
        //console.log('UID:', userUid);
        //console.log('Email:', userEmail);
        setEmail(userEmail);
        setUid(userUid);
      } else {
        // El usuario no está autenticado
        console.log('Usuario no autenticado');
        //PONER ALERTA Y REDIRECCIONANDO AL INICIO?
        // Aquí puedes redirigir a la pantalla de inicio de sesión o mostrar un formulario de registro
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Iniciando sesión...');
        console.log('Email:', email);
        console.log('Contraseña:', password);
        const user = userCredential.user;
        //const referencia = user.uid;
        //console.log(referencia);
        //console.log(user);
        //navigation.navigate('Menú'); //original
        navigation.navigate('Menú', { referencia: email }); //prueba
      })
      .catch(error => {
        console.log(error)
        Alert.alert('Error al iniciar sesión', 'Verifique que el usuario y la contraseña sean las correctas');
      })
  }

  return (
    <View style={pantalla.base}>
      <Text style={texto.titulo}>ELDERLY CARE</Text>
      <Image style={texto.imagen} source={require('../../assets/logo.png')} />

      <View>
        <Text style={texto.texto}>Correo electronico</Text>
        <TextInput
          style={texto.escribir}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={texto.texto}>Contraseña</Text>
        <TextInput
          style={texto.escribir}
          placeholder="Contraseña"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Ionicons
          name={showPassword ? 'eye-outline' : 'eye-off-outline'}
          style={{ position: 'absolute', left: 220, top: 125, fontSize: 30 }}
          onPress={() => setShowPassword(!showPassword)} />
      </View>


      <TouchableOpacity style={botones.inicio}
        onPress=
        //navigation.navigate('Menú')}
        {handleSignIn}
      >
        <Text style={botones.texto}>INICIAR SESIÓN</Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Nueva cuenta')}>
          <Text style={styles.switch}>
            {'No tienes una cuenta? Regístrate'}
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  switch: {
    marginTop: 12,
    color: 'blue',
  },
});
