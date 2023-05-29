import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Button, Alert } from 'react-native';
import { texto, botones, pantalla } from '../styles';
import RadioButtonRN from 'radio-buttons-react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from '@react-native-picker/picker';

//FIREBASE
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/firebaseConfig';
import { getFirestore, collection, addDoc, setDoc, doc } from 'firebase/firestore';

function IngresarDatos({ navigation }) {
    // FIREBASE
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // El usuario está autenticado
                console.log('');
                console.log('Actualización de Información:');//, user);

                const userUid = user.uid;
                const userEmail = user.email;

                console.log('UID:', userUid);
                console.log('Email:', userEmail);
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

    const [nombreCompleto, setNombreCompleto] = useState('');
    const [edad, setEdad] = useState('');
    const [genero, setGenero] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [estado, setEstado] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [uid, setUid] = useState('');
    const [email, setEmail] = useState('');

    const data = [
        { label: 'F', accessibilityLabel: 'Femenino' },
        { label: 'M', accessibilityLabel: 'Masculino' }
    ];

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // Formatear la fecha si es necesario
        setFechaNacimiento(date.toISOString());
        hideDatePicker();
    };

    const handleContinuar = async () => {
        // Realizar acciones con los datos ingresados por el usuario
        console.log('Nombre completo:', nombreCompleto);
        console.log('Edad:', edad);
        console.log('Género:', genero);
        console.log('Fecha de nacimiento:', fechaNacimiento);
        console.log('Estado:', estado);
        console.log('Municipio:', municipio);

        try {
            const collectionRef = collection(db, 'users');
            const docRef = doc(collectionRef);

            const data = {
                uidAuth: uid,
                uidFireStore: docRef.id,
                displayName: nombreCompleto,
                email: email,
                edad: edad,
                genero: genero,
                fechaNacimiento: fechaNacimiento,
                estado: estado,
                municipio: municipio
            };

            await setDoc(docRef, data);
            /*
            // DE ESTA FORMA TAMBIEN ES CORRECTA PERO LA UID ES DIFERENTE
            const docRef = await addDoc(collection(db, 'users'), {
                uid: uid,
                //uid: docRef.id,
                displayName: nombreCompleto,
                email: email,
                edad: edad,
                genero: genero,
                fechaNacimiento: fechaNacimiento,
                estado: estado,
                municipio: municipio
            });*/
            console.log("Se registró un usuario en firestore con Id: ", docRef.id);
            //console.log(data);
            // Redirigir a la siguiente pantalla
            Alert.alert('Éxito',
                'Nuevo usuario registrado',
                [
                    {
                        text: 'Aceptar',
                        onPress: () => navigation.push('Seleccion de Usuario', { referencia: data.uidFireStore }) //navigation.push('Seleccion de Usuario')
                    },
                ],
                { cancelable: false }
            );
        } catch (error) {
            alert('Error al intentar agregar un nuevo usuario');
            console.log("Error al guardar en firestore ", error);
        };
    };

    return (
        <ScrollView>
            <View style={pantalla.base}>
                <View style={{ flexDirection: "row" }}>
                    <MaterialIcons name="account-box" size={60} color="black" style={{ marginTop: 40 }} />
                    <Text style={[texto.titulo]}> PERFIL DEL USUARIO </Text>
                </View>
                <Text style={texto.subtitulo}>Es obligatorio que escribas tu información para en caso de emergencia</Text>

                <View>
                    <Text style={[texto.texto, { marginTop: 50 }]}>Nombre Completo</Text>
                    <TextInput
                        style={texto.escribir}
                        onChangeText={(text) => setNombreCompleto(text)}
                        value={nombreCompleto}
                    />
                    <Text style={[texto.texto, { marginTop: 10 }]}>Edad</Text>
                    <TextInput
                        style={texto.escribir}
                        onChangeText={(text) => setEdad(text)}
                        value={edad}
                    />

                    <View>
                        <Text style={[texto.texto, { marginTop: 10 }]}>Genero</Text>
                        <RadioButtonRN
                            data={data}
                            selectedBtn={(e) => setGenero(e.label)}
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
                            selectedValue={estado}
                            onValueChange={(itemValue) => setEstado(itemValue)}
                        >
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
                            selectedValue={municipio}
                            onValueChange={(itemValue) => setMunicipio(itemValue)}
                        >
                            <Picker.Item label="Aguascalientes" value="Aguascalientes" />
                            <Picker.Item label="Mexicali" value="Mexicali" />
                            <Picker.Item label="La Paz" value="La Paz" />
                            <Picker.Item label="San Francisco de Campeche" value="San Francisco de Campeche" />
                            <Picker.Item label="Tuxtla Gutiérrez" value="Tuxtla Gutiérrez" />
                            <Picker.Item label="Chihuahua" value="Chihuahua" />
                            <Picker.Item label="Ciudad de México" value="Ciudad de México" />
                            <Picker.Item label="Saltillo" value="Saltillo" />
                            <Picker.Item label="Colima" value="Colima" />
                            <Picker.Item label="Victoria de Durango" value="Victoria de Durango" />
                            <Picker.Item label="Guanajuato" value="Guanajuato" />
                            <Picker.Item label="Chilpancingo de los Bravo" value="Chilpancingo de los Bravo" />
                            <Picker.Item label="Pachuca de Soto" value="Pachuca de Soto" />
                            <Picker.Item label="Guadalajara" value="Guadalajara" />
                            <Picker.Item label="Toluca de Lerdo" value="Toluca de Lerdo" />
                            <Picker.Item label="Morelia" value="Morelia" />
                            <Picker.Item label="Cuernavaca" value="Cuernavaca" />
                            <Picker.Item label="Tepic" value="Tepic" />
                            <Picker.Item label="Monterrey" value="Monterrey" />
                            <Picker.Item label="Oaxaca de Juárez" value="Oaxaca de Juárez" />
                            <Picker.Item label="Puebla de de Zaragoza" value="Puebla de de Zaragoza" />
                            <Picker.Item label="Santiago de Querétaro" value="Santiago de Querétaro" />
                            <Picker.Item label="Chetumal" value="Chetumal" />
                            <Picker.Item label="San Luis Potosí	" value="San Luis Potosí" />
                            <Picker.Item label="Culiacán Rosales" value="Culiacán Rosales" />
                            <Picker.Item label="Hermosillo" value="Hermosillo" />
                            <Picker.Item label="Villahermosa" value="Villahermosa" />
                            <Picker.Item label="Ciudad Victoria" value="Ciudad Victoria" />
                            <Picker.Item label="Tlaxcala de Xicohténcatl" value="Tlaxcala de Xicohténcatl" />
                            <Picker.Item label="Xalapa-Enríquez" value="Xalapa-Enríquez" />
                            <Picker.Item label="Mérida" value="Mérida" />
                            <Picker.Item label="Zacatecas" value="Zacatecas" />
                        </Picker>
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity onPress={handleContinuar}>
                            <Text style={[botones.texto, { marginBottom: 15 }]}>Continuar   →</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default IngresarDatos;
