import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { texto, botones, pantalla } from '../../styles';

//FIREBASE
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase/firebaseConfig';
import { getFirestore, getDoc, doc, collection, query, where, getDocs } from 'firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';

const Pruebas = ({ route, navigation }) => {

    // FIREBASE
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore();

    const { referencia } = route.params;

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
                // Verificar si el parámetro referencia es un email
                if (typeof referencia === 'string' && referencia.includes('@')) {//if (referencia.includes('@')) {

                    // Hacer algo con el email    
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
                        setUserData(userData);
                    });
                } else {
                    // Hacer algo con el ID
                    const docRef = doc(db, 'users', referencia);
                    const result = await getDoc(docRef);
                    if (result.exists()) {
                        const data = result.data();
                        setUserData(data);
                    }
                }
            } catch (error) {
                console.error('Error al obtener los datos del usuario:', error);
            }
        };

        obtenerDatosUsuario();
    }, [referencia]);

    return (
        <ScrollView>
            <View style={pantalla.base}>
                <Text style={[texto.titulo, { bottom: 20 }]}>PERFIL DE USUARIO</Text>
                <View>
                    <Text style={[texto.menu, { textAlign: 'center' }]}>
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>Nombre Completo</Text>{'\n'}
                        {userData && userData.displayName}{'\n'}
                        {'\n'}{'\n'}
                        <Text style={{fontWeight: 'bold'}}>ID de Usuario</Text>{'\n'}
                        {userData && userData.uidAuth}{'\n'}
                        {'\n'}{'\n'}
                        <Text style={{fontWeight: 'bold'}}>Correo electrónico</Text>{'\n'}
                        {userData && userData.email}{'\n'}
                        {'\n'}{'\n'}
                        <Text style={{fontWeight: 'bold'}}>Edad</Text>{'\n'}
                        {userData && userData.edad}{'\n'}
                        {'\n'}{'\n'}
                        <Text style={{fontWeight: 'bold'}}>Fecha de Nacimiento</Text>{'\n'}
                        {userData && userData.fechaNacimiento}{'\n'}
                        {'\n'}{'\n'}
                        <Text style={{fontWeight: 'bold'}}>Género</Text>{'\n'}
                        {userData && userData.genero}
                        {'\n'}{'\n'}

                        {userData && userData.idDificultadTitle ? (
                            <>
                                <Text style={{fontWeight: 'bold'}}>Padecimiento</Text>{'\n'}
                                {userData.idDificultadTitle}
                                {'\n'}{'\n'}{'\n'}
                            </>
                        ) : null}

                        <Text style={{fontWeight: 'bold'}}>Estado</Text>{'\n'}
                        {userData && userData.estado}{'\n'}
                        {'\n'}{'\n'}
                        <Text style={{fontWeight: 'bold'}}>Municipio</Text>{'\n'}
                        {userData && userData.municipio}{'\n'}
                        {'\n'}{'\n'}
                    </Text>
                </View>
            </View>
        </ScrollView>
        /*
        <ScrollView>
            <View style={pantalla.base}>
                <Text style={[texto.titulo, { bottom: 20 }]}>PERFIL DE USUARIO</Text>
                <View>
                    <Text style={[texto.menu, { textAlign: 'center' }]}>
                        {'\n'}
                        Nombre Completo{'\n'}
                        {userData && userData.displayName}{'\n'}
                        {'\n'}{'\n'}
                        ID de Usuario{'\n'}
                        {userData && userData.uidAuth}{'\n'}
                        {'\n'}{'\n'}
                        Correo electronico{'\n'}
                        {userData && userData.email}{'\n'}
                        {'\n'}{'\n'}
                        Edad{'\n'}
                        {userData && userData.edad}{'\n'}
                        {'\n'}{'\n'}
                        Fecha de Nacimiento{'\n'}
                        {userData && userData.fechaNacimiento}{'\n'}
                        {'\n'}{'\n'}
                        Genero{'\n'}
                        {userData && userData.genero}
                        {'\n'}{'\n'}

                        {userData && userData.idDificultadTitle ? (
                            <>
                                Padecimiento:{'\n'}
                                {userData.idDificultadTitle}
                                {'\n'}{'\n'}{'\n'}
                            </>
                        ) : null}
                       
                        Estado{'\n'}
                        {userData && userData.estado}{'\n'}
                        {'\n'}{'\n'}
                        Municipio{'\n'}
                        {userData && userData.municipio}{'\n'}
                        {'\n'}{'\n'}
                    </Text>
                </View>
            </View>
        </ScrollView>*/
    );
}

export default Pruebas;



/*import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import { texto, botones, pantalla } from '../../styles';
import { MaterialIcons } from '@expo/vector-icons';

//FIREBASE
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase/firebaseConfig';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

const Pruebas = ({ route }) => {
    // FIREBASE
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore();

    const { referencia } = route.params;

    const [userData, setUserData] = useState('');

    useEffect(() => {
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
    }, [referencia]);

    return (
        <ScrollView>
            <View style={[pantalla.frame, { flexDirection: "row", textAlign: 'center' }]}>
                <View>
                    <Text style={{textAlign: 'center'}}>Nombre Completo</Text>
                    <Text style={{textAlign: 'center'}}>{userData && userData.displayName}</Text>
                    <Text style={{textAlign: 'center'}}>Correo de Usuario</Text>
                    <Text style={{textAlign: 'center'}}>{userData && userData.email}</Text>
                </View>
            </View>
        </ScrollView>
    );
    /*const Pruebas = ({ route, navigation }) => {
        // FIREBASE
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const db = getFirestore();
    
        const { referencia } = route.params;
        console.log(referencia);
    
        const handleActualizacionUsuario = async (datos) => {
            // Realizar acciones de actualización con los datos proporcionados
            console.log('Datos actualizados:', datos);
    
            try {
                const { tipoUsuario } = datos;
                const userDocRef = doc(db, 'users', referencia);
                await updateDoc(userDocRef, { tipoUsuario: tipoUsuario });
                console.log('Documento actualizado en Firestore');
                if (tipoUsuario == 'Adulto Mayor') {
                    navigation.push('Dificultades')
                } else {
                    navigation.push('Menú')
                }
            } catch (error) {
                console.error('Error al actualizar el documento:', error);
            }
        };
    
        return (
            <ScrollView>
                <View style={pantalla.base}>
                    <View>
                        <Text style={[texto.titulo]}> TIPO DE USUARIO </Text>
                        <Text style={[texto.subtitulo, { marginTop: 50 }]}>Selecciona el tipo de usuario quien utilizará la aplicación</Text>
                    </View>
    
                    <TouchableOpacity
                        style={[botones.usuarios, { marginTop: 40 }]}
                        onPress={() => handleActualizacionUsuario({ tipoUsuario: 'Adulto Mayor' })}>
                        <MaterialIcons name="elderly" size={60} color="white" />
                        <Text style={[texto.boton, { marginTop: 15 }, { fontSize: 16 }]}>Adulto mayor</Text>
                    </TouchableOpacity>
    
                    <TouchableOpacity
                        style={[botones.usuarios, { marginTop: 40 }]}
                        onPress={() => handleActualizacionUsuario({ tipoUsuario: 'Cuidador' })}>
                        <MaterialIcons name="elderly" size={60} color="white" />
                        <Text style={[texto.boton, { marginTop: 15 }, { fontSize: 16 }]}>   Cuidador   </Text>
                    </TouchableOpacity>
    
                </View>
            </ScrollView>
        );
    }
}
export default Pruebas;
*/