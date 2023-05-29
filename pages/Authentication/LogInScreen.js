import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { texto, botones, pantalla } from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

//FIREBASE
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase/firebaseConfig';

function HomeScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Iniciando sesión...');
        console.log('Email:', email);
        console.log('Contraseña:', password);
        const user = userCredential.user;
        //console.log(user);
        navigation.navigate('Menú'); //original
        //navigation.navigate('Pruebas'); //prueba
      })
      .catch(error => {
        console.log(error)
        Alert.alert('Error al iniciar sesión','Verifique que el usuario y la contraseña sean las correctas');
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
