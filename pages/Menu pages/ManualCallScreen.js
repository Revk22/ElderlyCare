import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, } from 'react-native';
import { texto, llamada, pantalla } from '../../styles';
import call from 'react-native-phone-call';

const ManualCallsScreen = ({ route, navigation }) => {
    const [inputValue, setInputValue] = useState('9999999999');
    const { referencia } = route.params;

    triggerCall = () => {
        // Check for perfect 10 digit length
        if (inputValue.length != 10) {
            alert('Please insert correct contact number');
            return;
            const args = {
                number: inputValue,
                prompt: true,
            };
            // Make a call
            call(args).catch(console.error);
        } else {
            navigation.push('Menú', { referencia: referencia })
        }
    }

    return (
        <View style={[pantalla.base, { alignItems: 'center' }]}>
            <Text style={[texto.subtitulo, { top: 80, fontSize: 30 }]}>VENTANA LLAMADA</Text>

            <View style={llamada.container}>
                <Text style={llamada.titleText}>
                    Example to Make a Phone Call in React Native App
                </Text>
                <Text style={llamada.titleTextsmall}>
                    Enter Conatct Number to Call
                </Text>
                <TextInput
                    value={inputValue}
                    onChangeText={
                        (inputValue) => setInputValue(inputValue)
                    }
                    placeholder={'Enter Conatct Number to Call'}
                    keyboardType="numeric"
                    style={llamada.textInput}
                />
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={llamada.buttonStyle}
                    onPress={triggerCall}>
                    <Text style={llamada.buttonTextStyle}>
                        Make a Call
                    </Text>
                </TouchableOpacity>


            </View>
        </View>


    );
}

export default ManualCallsScreen;