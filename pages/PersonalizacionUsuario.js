import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import { texto, botones, pantalla } from '../styles';
import RadioButtonRN from 'radio-buttons-react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from '@react-native-picker/picker';
import { margin } from '@mui/system';


//Siempre gano en el dutch blitz

function PersonalizacionUsuario({ navigation }) {
    const [textoBasico, setTextoBasico] = useState('salida con texto');

    const data = [
        {
            label: 'F',
            accessibilityLabel: 'Femenino'
        },
        {
            label: 'M',
            accessibilityLabel: 'Masculino'
        }
    ];

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("Se ha seleccionado fecha: ", date);
        hideDatePicker();
    };

    const [selectedState, setSelectedState] = useState();
    const [selectedMunicipio, setSelectedMunicipio] = useState();

    return (
        <ScrollView>
            <View style={pantalla.base}>
                <View style={{ flexDirection: "row" }}>
                    <MaterialIcons name="account-box" size={60} color="black" style ={{ marginTop: 40 }} />
                    <Text style={[texto.titulo]}> PERFIL DEL USUARIO </Text>

                </View>
                <Text style={texto.subtitulo}>Es obligatorio que escribas tu información para en caso de emergencia</Text>

                <View>
                    <Text style={[texto.texto, { marginTop: 50 }]}>Nombre Completo</Text>
                    <TextInput
                        style={texto.escribir}
                        onChangeText={(text) => setTextoBasico(text)}
                    />
                    <Text style={[texto.texto, { marginTop: 10 }]}>Edad</Text>
                    <TextInput
                        style={texto.escribir}
                        onChangeText={(text) => setTextoBasico(text)}
                    />

                    <View>
                        <Text style={[texto.texto, { marginTop: 10 }]}>Genero</Text>
                        <RadioButtonRN
                            data={data}
                            selectedBtn={(e) => console.log(e)}
                        />
                    </View>

                    <View>
                        <Text style={[texto.texto, { marginTop: 25 }]}>Fecha de Nacimiento</Text>
                        <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>

                    <View>
                        <Text style={[texto.texto, { marginTop: 25 }]}>Estado</Text>
                        <Picker

                            selectedValue={selectedState}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedState(itemValue)
                            }>
                            <Picker.Item label="Aguascalientes" value="Aguascalientes" />
                            <Picker.Item label="Baja California" value="Baja California" />
                            <Picker.Item label="Baja California Sur	" value="Baja California Sur" />
                            <Picker.Item label="Campeche" value="Campeche" />
                            <Picker.Item label="Chiapas" value="Chiapas" />
                            <Picker.Item label="Chihuahua" value="Chihuahua" />
                            <Picker.Item label="Ciudad de México" value="Ciudad de México	" />
                            <Picker.Item label="Coahuila" value="Coahuila" />
                            <Picker.Item label="Colima" value="Colima" />
                            <Picker.Item label="Durango" value="Durango" />
                            <Picker.Item label="Guanajuato" value="Guanajuato" />
                            <Picker.Item label="Guerrero" value="Guerrero" />
                            <Picker.Item label="Hidalgo	" value="Hidalgo" />
                            <Picker.Item label="Jalisco" value="Jalisco" />
                            <Picker.Item label="México" value="México" />
                            <Picker.Item label="Michoacán" value="Michoacán" />
                            <Picker.Item label="Morelos" value="Morelos" />
                            <Picker.Item label="Nayarit" value="Nayarit" />
                            <Picker.Item label="Nuevo León" value="Nuevo León" />
                            <Picker.Item label="Oaxaca" value="Oaxaca" />
                            <Picker.Item label="Puebla" value="Puebla" />
                            <Picker.Item label="Querétaro" value="Querétaro" />
                            <Picker.Item label="Quintana Roo" value="Quintana Roo" />
                            <Picker.Item label="San Luis Potosí	" value="San Luis Potosí" />
                            <Picker.Item label="Sinaloa" value="Sinaloa" />
                            <Picker.Item label="Sonora" value="Sonora" />
                            <Picker.Item label="Tabasco" value="Tabasco" />
                            <Picker.Item label="Tamaulipas" value="Tamaulipas" />
                            <Picker.Item label="Tlaxcala" value="Tlaxcala" />
                            <Picker.Item label="Veracruz" value="Veracruz" />
                            <Picker.Item label="Yucatán" value="Yucatán" />
                            <Picker.Item label="Zacatecas" value="Zacatecas" />
                        </Picker>
                    </View>

                    <View>
                        <Text style={[texto.texto, { marginTop: 25 }]}>Municipio</Text>
                        <Picker

                            selectedValue={selectedMunicipio}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedMunicipio(itemValue)
                            }>
                            <Picker.Item label="Aguascalientes" value="Aguascalientes" />
                            <Picker.Item label="Mexicali" value="Baja California" />
                            <Picker.Item label="La Paz" value="Baja California Sur" />
                            <Picker.Item label="San Francisco de Campeche" value="Campeche" />
                            <Picker.Item label="Tuxtla Gutiérrez" value="Chiapas" />
                            <Picker.Item label="Chihuahua" value="Chihuahua" />
                            <Picker.Item label="Ciudad de México" value="Ciudad de México	" />
                            <Picker.Item label="Saltillo" value="Coahuila" />
                            <Picker.Item label="Colima" value="Colima" />
                            <Picker.Item label="Victoria de Durango" value="Durango" />
                            <Picker.Item label="Guanajuato" value="Guanajuato" />
                            <Picker.Item label="Chilpancingo de los Bravo" value="Guerrero" />
                            <Picker.Item label="Pachuca de Soto" value="Hidalgo" />
                            <Picker.Item label="Guadalajara" value="Jalisco" />
                            <Picker.Item label="Toluca de Lerdo" value="México" />
                            <Picker.Item label="Morelia" value="Michoacán" />
                            <Picker.Item label="Cuernavaca" value="Morelos" />
                            <Picker.Item label="Tepic" value="Nayarit" />
                            <Picker.Item label="Monterrey" value="Nuevo León" />
                            <Picker.Item label="Oaxaca de Juárez" value="Oaxaca" />
                            <Picker.Item label="Puebla de de Zaragoza" value="Puebla" />
                            <Picker.Item label="Santiago de Querétaro" value="Querétaro" />
                            <Picker.Item label="Chetumal" value="Quintana Roo" />
                            <Picker.Item label="San Luis Potosí	" value="San Luis Potosí" />
                            <Picker.Item label="Culiacán Rosales" value="Sinaloa" />
                            <Picker.Item label="Hermosillo" value="Sonora" />
                            <Picker.Item label="Villahermosa" value="Tabasco" />
                            <Picker.Item label="Ciudad Victoria" value="Tamaulipas" />
                            <Picker.Item label="Tlaxcala de Xicohténcatl" value="Tlaxcala" />
                            <Picker.Item label="Xalapa-Enríquez" value="Veracruz" />
                            <Picker.Item label="Mérida" value="Yucatán" />
                            <Picker.Item label="Zacatecas" value="Zacatecas" />
                        </Picker>
                    </View>


                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity
                            onPress={() => navigation.push('Menú')}>
                            <Text style={botones.texto}>Continuar   →</Text>
                        </TouchableOpacity>
                    </View>
                </View>




            </View>
        </ScrollView>
    );
}

export default PersonalizacionUsuario;