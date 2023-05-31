import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { texto, botones, pantalla } from '../styles';

import Icon from 'react-native-vector-icons/Fontisto';  // MEDICINA
import { MaterialCommunityIcons } from '@expo/vector-icons';  //SOS
import { Foundation } from '@expo/vector-icons';  //CONTACTOS
import { Feather } from '@expo/vector-icons';   //LLAMADAS
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

//FIREBASE
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/firebaseConfig';
import { getFirestore, getDoc, doc, collection, query, where, getDocs } from 'firebase/firestore';

const MenuScreen = ({ route, navigation }) => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    setCurrentDate(
      hours + ':' + min
    );
  }, []);

  // FIREBASE
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore();

  const { referencia } = route.params;
  //const { emailRef } = route.params;

  const [userData, setUserData] = useState('');

  /*useEffect(() => {
    const obtenerDatosUsuario = async () => {
      try {
        const docRef = doc(db, 'users', referencia);
        const result = await getDoc(docRef);
        if (result.exists()) {
          console.log("Resutlado: ", result.data());
          const data = result.data();
          setUserData(data);
        }
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    obtenerDatosUsuario();
  }, [referencia]);*/

  useEffect(() => {
    const obtenerDatosUsuario = async () => {
      try {
        //
        // Verificar si el parámetro referencia es un email
        if (typeof referencia === 'string' && referencia.includes('@')) {//if (referencia.includes('@')) {

          // Hacer algo con el email
          //console.log('La referencia es un email:', referencia);

          const q = query(collection(db, 'users'), where('email', '==', referencia));
          const querySnapshot = await getDocs(q);

          if (querySnapshot.empty) {
            console.log('No se encontró ningún documento con ese email');
            return;
          }

          // Recorrer los resultados de la consulta
          querySnapshot.forEach(doc => {
            // Obtener los datos del documento encontrado
            const userData = doc.data();
            //console.log('Datos del usuario:', userData);
            setUserData(userData);
          });

          ////////////////////
          /*usersCollection.where('email', '==', userEmail).get()
            .then(querySnapshot => {
              if (querySnapshot.empty) {
                console.log('No se encontró ningún documento con ese email');
                return;
              }
    
              // Recorrer los resultados de la consulta
              querySnapshot.forEach(doc => {
                // Obtener los datos del documento encontrado
                const userData = doc.data();
                console.log('Datos del usuario:', userData);
              });
            })
            .catch(error => {
              console.log('Error al buscar el documento:', error);
              // Maneja el error de alguna manera adecuada
            });*/
        } else {
          // Hacer algo con el ID
          //console.log('La referencia es un ID:', referencia);
          //const obtenerDatosUsuario = async () => {
          // try {
          const docRef = doc(db, 'users', referencia);
          const result = await getDoc(docRef);
          if (result.exists()) {
            //console.log("Resutlado: ", result.data());
            const data = result.data();
            setUserData(data);
          }
        }
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    obtenerDatosUsuario();

    // Resto del código del useEffect
    // ...

  }, [referencia]);

  return (
    <View style={pantalla.base}>
      <View style={[pantalla.frame, { flexDirection: "row", justifyContent: "center", alignItems: 'center' }]}>
        <Entypo name="stopwatch" size={75} color="black" />
        <Text style={[{ fontSize: 50 }]}> {currentDate}  </Text>
      </View>
      <View style={{marginTop: 50}}>
        <TouchableOpacity
          style={[botones.menu, { right: 90 }]}
          onPress={() => navigation.push('Menú SOS', { referencia: referencia })}>
          <MaterialCommunityIcons
            name="car-emergency"
            size={60}
            color="#F41C1C"
            style={{ marginBottom: 10 }}
          />
          <Text style={texto.boton}>Botón de pánico</Text><Text style={texto.boton}>para emergencias</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[botones.menu, { left: 90, bottom: 179 }]}
          onPress={() => navigation.push('Menú Contacts', { referencia: referencia })}>
          <Foundation
            name="torsos-all"
            size={60}
            color="white"
            style={{ marginBottom: 10 }}
          />
          <Text style={texto.boton}>Contactos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[botones.menu, { right: 90, bottom: 160 }]}
          onPress={() => navigation.push('Menú Calls', { referencia: referencia })}>
          <Feather
            name="phone-call"
            size={60}
            color="white"
            style={{ marginBottom: 10 }}
          />
          <Text style={texto.boton}>Llamadas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[botones.menu, { left: 90, bottom: 340 }]}
          //onPress={() => navigation.push('Menú Medicine')}>
          onPress={() => navigation.push('Menú Medicine', { referencia: referencia })}>
          <Icon
            name={'test-bottle'}
            color="white"
            style={{ fontSize: 60, marginBottom: 10, }}
          />
          <Text style={texto.boton}>Medicamentos</Text>
        </TouchableOpacity>

      </View>

      <View style={[pantalla.frame, { position: 'absolute', bottom: 0, marginBottom: 11, height: 125 }]}></View>

      <SafeAreaView style={{ position: 'absolute', alignSelf: 'flex-start', bottom: 20, left: 15 }}>
        <MaterialIcons
          name="account-circle"
          size={100}
          color="#333"
          //style={{borderWidth: 2, borderColor: 'black', borderRadius: 60, padding: 0}}
          onPress={() => navigation.push('Pruebas', { referencia: referencia })}
        />
      </SafeAreaView>
      <View style={{ position: 'absolute', alignSelf: 'flex-start', bottom: 30, left: 130}}>
        <Text style={[texto.menu, {fontWeight: 'bold'}]}>Nombre Completo</Text>
        <Text style={texto.menu}>{userData && userData.displayName}</Text>
        <Text style={[texto.menu, {fontWeight: 'bold'}]}>Correo de Usuario</Text>
        <Text style={texto.menu}>{userData && userData.email}</Text>

      </View>


    </View>

  );
}

export default MenuScreen;