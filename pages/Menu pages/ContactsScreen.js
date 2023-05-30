import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { texto, botones, pantalla, imagen } from '../../styles';

const ContactsScreen =({ route, navigation })=> {
  const {referencia} = route.params;

  return (
    <View style={[pantalla.base, { padding: 25 }]}>
      <Text style={[texto.titulo, { marginBottom: 20, marginTop: 10 }]}> CONTACTOS </Text>
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Mary Hija', referencia })}>
            <Image 
            style={imagen.contactos}
            source={require('../../assets/mary.png')} />
            <Text style={texto.boton}>Mary Hija</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Tulio Hijo', referencia })}>
              <Image 
            style={imagen.contactos}
            source={require('../../assets/tulio.png')} />
            <Text style={texto.boton}>Tulio Hijo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Alonso Nieto', referencia })}>
              <Image 
            style={imagen.contactos}
            source={require('../../assets/alonso.png')} />
            <Text style={texto.boton}>Alonso Nieto</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Tristán Vecino', referencia })}>
              <Image 
            style={imagen.contactos}
            source={require('../../assets/tristan.png')} />
            <Text style={texto.boton}>Tristán Vecino</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Doctora Diana', referencia })}>
              <Image 
            style={imagen.contactos}
            source={require('../../assets/diana.png')} />
            <Text style={texto.boton}>Doctora Diana</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Policia', referencia })}>
              <Image 
            style={imagen.contactos}
            source={require('../../assets/policia.png')} />
            <Text style={texto.boton}>Policia</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Panchita', referencia })}>
              <Image 
            style={imagen.contactos}
            source={require('../../assets/panchita.png')} />
            <Text style={texto.boton}>Panchita</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Valeria Nieta', referencia })}>
              <Image 
            style={imagen.contactos}
            source={require('../../assets/valeria.png')} />
            <Text style={texto.boton}>Valeria Nieta</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Eduardo Miranda', referencia })}>
              <Image 
            style={imagen.contactos}
            source={require('../../assets/eduardo.png')} />
            <Text style={texto.boton}>Eduardo Miranda</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Ana Monterrey', referencia })}>
              <Image 
            style={imagen.contactos}
            source={require('../../assets/ana.png')} />
            <Text style={texto.boton}>Ana Monterrey</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default ContactsScreen;