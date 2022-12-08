import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.titulo}>ELDERLY CARE</Text>
      <Image source={require('./logo.png')} />
      <Button
        title='Iniciar Sesion'
        style={styles.botton}
        onPress={() => navigation.navigate('Detalles')} />
    </View>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla de detalles</Text>
      <Button
        title='Continuar →'
        onPress={() => navigation.push('Loading')} />
    </View>
  );
}

function LoadingScreen({ navigation }) {
  return (
    <View>
      <Text> Loading </Text>
      <Text> Ya casi terminamos ! </Text>
    </View>
  );
}


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: 'lightblue'
          },
          headerTintColor: 'black'
        }}>
        <Stack.Screen name="Inicio de Sesión" component={HomeScreen} />
        <Stack.Screen name="Detalles" component={RegisterScreen} />
        <Stack.Screen name='Loading' component={LoadingScreen} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}