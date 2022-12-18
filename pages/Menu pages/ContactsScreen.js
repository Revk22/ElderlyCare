import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { texto, botones, pantalla, imagen } from '../../styles';

function ContactsScreen({ navigation }) {
  return (
    <View style={[pantalla.base, { padding: 25 }]}>
      <Text style={[texto.titulo, { marginBottom: 20, marginTop: 10 }]}> CONTACTOS </Text>
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Mary Hija' })}>
            <Image 
            style={imagen.contactos}
            source={require('../../assets/mary.png')} />
            <Text style={texto.boton}>Mary Hija</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Tulio Hijo' })}>
              <Image 
            style={imagen.contactos}
            source={require('../../assets/tulio.png')} />
            <Text style={texto.boton}>Tulio Hijo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Alonso Nieto' })}>
              <Image 
            style={imagen.contactos}
            source={require('../../assets/alonso.png')} />
            <Text style={texto.boton}>Alonso Nieto</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Tristán Vecino' })}>
              <Image 
            style={imagen.contactos}
            source={require('../../assets/tristan.png')} />
            <Text style={texto.boton}>Tristán Vecino</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Doctora Diana' })}>
              <Image 
            style={imagen.contactos}
            source={require('../../assets/diana.png')} />
            <Text style={texto.boton}>Doctora Diana</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Policia' })}>
              <Image 
            style={imagen.contactos}
            source={require('../../assets/policia.png')} />
            <Text style={texto.boton}>Policia</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Panchita' })}>
              <Image 
            style={imagen.contactos}
            source={require('../../assets/panchita.png')} />
            <Text style={texto.boton}>Panchita</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Valeria Nieta' })}>
              <Image 
            style={imagen.contactos}
            source={require('../../assets/valeria.png')} />
            <Text style={texto.boton}>Valeria Nieta</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Eduardo Miranda' })}>
              <Image 
            style={imagen.contactos}
            source={require('../../assets/eduardo.png')} />
            <Text style={texto.boton}>Eduardo Miranda</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={botones.contactos}
            onPress={() => navigation.push('Llamando', { numero: 'Ana Monterrey' })}>
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