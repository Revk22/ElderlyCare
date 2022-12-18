import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, ScrollView, View } from "react-native";
import { texto, botones, pantalla } from '../styles';

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

function DificultadesScreen({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);

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