import 'react-native-gesture-handler';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { texto, botones, pantalla } from '../styles';


function HomeScreen({ navigation }) {
  return (
    <View style={pantalla.base}>
      <Text style={texto.titulo}>ELDERLY CARE</Text>
      <Image style={texto.imagen} source={require('../assets/logo.png')} />
      <View>
        <TouchableOpacity style={botones.inicio}
          onPress={() => navigation.navigate('Inicio de Sesión')}>
          <Text style={botones.texto}>Inicio de Sesión</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={botones.inicio}
          onPress={() => navigation.navigate('Registrate')}>
          <Text style={botones.texto}>REGISTRARSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;