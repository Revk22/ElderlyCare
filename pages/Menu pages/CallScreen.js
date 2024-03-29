import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { texto, botones, pantalla } from '../../styles';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icono from 'react-native-vector-icons/Ionicons';

const Call_SOS = ({ route, navigation }) => {
    const [changeIcon, setChangeIcon] = useState(false);
    const [changeIcon2, setChangeIcon2] = useState(false);

    const { numero } = route.params;
    const { referencia } = route.params;

    //console.log(numero)
    //console.log(referencia)

    return (
        <View style={[pantalla.base, { alignItems: 'center' }]}>
            <Text style={[texto.subtitulo, { top: 80, fontSize: 30 }]}>Llamando a...</Text>
            <Text style={[texto.subtitulo, { top: 80, fontWeight: 'bold', fontSize: 40 }]}>{numero}</Text>
            <View style={{ position: 'absolute', top: 200 }}>
                <Ionicons
                    name={changeIcon ? 'microphone-slash' : 'microphone'}
                    style={{ position: 'absolute', right: 70, top: 255, fontSize: 50, color: '#25D21F' }} //color: '#F41C1C' }}
                    onPress={() => setChangeIcon(!changeIcon)}
                />

                <Icono
                    name={changeIcon2 ? 'megaphone' : 'megaphone-outline'}
                    style={{ position: 'absolute', left: 70, top: 255, fontSize: 50, backgroundColor: '#E2E7E2', borderRadius: 10 }}
                    onPress={() => setChangeIcon2(!changeIcon2)}
                />

            </View>
            <TouchableOpacity
                style={botones.colgar}
                onPress={() => navigation.push('Menú', { referencia: referencia })}>
                <Icon
                    name={'call-end'}
                    style={{
                        fontSize: 70,
                        color: 'white',
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}


export default Call_SOS;