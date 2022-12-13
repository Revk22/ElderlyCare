import 'react-native-gesture-handler';
import React, { useState, Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, } from 'react-native';
import { texto, botones, pantalla } from '../styles';
import { Card } from 'react-native-paper';


const Data = [
  {
    id: 1,
    first_name: 'Sile',
  },
  {
    id: 2,
    first_name: 'Clementia',
  },
  {
    id: 3,
    first_name: 'Brita',
  },
  {
    id: 4,
    first_name: 'Duke',
  },
  {
    id: 5,
    first_name: 'Hedvig',
  },
  {
    id: 6,
    first_name: 'Paulie',
  },
  {
    id: 7,
    first_name: 'Munmro',
  },
  {
    id: 8,
    first_name: 'Dyanna',
  },
  {
    id: 9,
    first_name: 'Shanta',
  },
  {
    id: 10,
    first_name: 'Bambi',
  },
];

class DificultadesScreen extends Component {
//function DificultadesScreen({ navigation }) {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      renderData: Data
    };
  }

  onPressHandler(id) {
    let renderData = [...this.state.renderData];
    for (let data of renderData) {
      if (data.id == id) {
        data.selected = (data.selected == null) ? true : !data.selected;
        break;
      }
    }
    this.setState({ renderData });
  }
  render(){
  return (

    <ScrollView>
      <View style={pantalla.base}>
        <Text style={[texto.titulo, { marginBottom: 20 }]}> DIFICULTADES </Text>
        <Text style={texto.subtitulo}>Selecciona cuáles de las siguientes enfermedades padece</Text>
        <Text style={texto.subtitulo}>Es importante conocer sobre tus padecimientos para que la aplicación se adapte a tus necesidades</Text>



        <View style={{ height: 40 }} />
        <Text style={{ fontSize: 20 }}>MultiSelect Demo</Text>


        <View>
          <FlatList
            //horizontal={true}
            data={this.state.renderData}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => this.onPressHandler(item.id)}>
                <Card
                  style={
                    item.selected == true
                      ? {
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#3DA9FC',
                      }
                      : {
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#',
                      }
                  }>
                  <Text>{item.first_name}</Text>
                </Card>
              </TouchableOpacity>
            )} //
          />
        </View>




        <View style={{ marginTop: 30 }}>
          <TouchableOpacity
            onPress={() => navigation.push('PersonalizacionUsuario')}>
            <Text style={botones.texto}>Continuar   →</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
}
}

export default DificultadesScreen;