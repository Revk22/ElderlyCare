import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, ScrollView, View } from "react-native";
import { texto, botones, pantalla } from '../styles';

import db from '../firebase/firebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { collection, query, where, getDocs } from 'firebase/firestore';


const Data = [
  {
    id: 1,
    title: 'Diabetes',
  },
  {
    id: 2,
    title: 'Hipertensión arterial',
  },
  {
    id: 3,
    title: 'Pérdida de visión',
  },
  {
    id: 4,
    title: 'Alzheimer',
  },
  {
    id: 5,
    title: 'Infartos',
  },
  {
    id: 6,
    title: 'Parkinson',
  },
  {
    id: 7,
    title: 'Osteoporosis',
  },
  {
    id: 8,
    title: 'Artritis',
  },
  {
    id: 9,
    title: 'Fibromialgia',
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

function DificultadesScreen({ route, navigation }) {
  const [selectedId, setSelectedId] = useState(null);

  /*await firebase
  .firestore()
  .collection('users')
  .add({
    displayName: 'John',
    email: 'john@example.com',
    phoneNumber: null,
  })*/

  const { contact, password } = route.params;
  let updateUser = async () => {
    console.log(contact, password);

    //const docRef = doc(db, 'users', contact); //&&password);
    //const q = query(collection(db, 'users'), where('conctac', '==', contact))
    const data = {
      contact: contact,
      password: password,
      health: selectedId,
      name: null,
      age: null,
      gender: null,
      address: null,
      dateOfBirth: null,
      state: null,
      municipality: null,
    }
    console.log(data);
    /*
        getDoc(q) //getDoc(docRef)
          .then((result) => {
            if (result.exists()) {
              let data = result.data();
              updateAllStates(data.name, data.contact, data.address);
            }
          })
          .catch((error) => {
            console.log("Registro no localizado ", error);
          })
    
    */
    //getDoc(docRef)
    /*setDoc(docRef, data)
    .then(docRef => {

    })*//*
    const [data2, setData2] = useState();
      try {
        const docRef = await firestore().collection('users').get()
        setData(docRef.docs)
      }catch (e) {
        console.log (e)
      }
      useEffect(() => {
        updateUser()
      })*/


  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#3DA9FC" : "#F2F1F7";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <ScrollView>
      <SafeAreaView style={pantalla.base}>
        <Text style={[texto.titulo, { marginBottom: 20 }]}> DIFICULTADES </Text>
        <Text style={texto.subtitulo}>Seleccione cuáles de las siguientes enfermedades está padeciendo</Text>
        <Text style={[texto.subtitulo, { marginBottom: 30 }]}>Es importante conocer sobre sus padecimientos para que la aplicación se adapte a sus necesidades</Text>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
        <TouchableOpacity onPress={updateUser} style={{ position: 'absolute' }}><Text>hola</Text></TouchableOpacity>

        <View style={{ marginTop: 30 }}>
          <TouchableOpacity
            onPress={() => navigation.push('PersonalizacionUsuario')}>
            <Text style={botones.texto}>Continuar   →</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 30,
  },
  title: {
    fontSize: 20,
  },
});

export default DificultadesScreen;