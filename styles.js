import { StyleSheet } from "react-native";

const pantalla = StyleSheet.create({
    base: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    frame: {
        marginTop: 25,
        backgroundColor: 'lightblue',
        width: 500,
        height: 100,
        marginBottom: 30,
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20
      }
});

const texto = StyleSheet.create({
    titulo: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 50,
        fontWeight: 'bold',
        fontFamily: 'sans-serif'
        //fontFamily: 'Lexend Peta' //No deja
    },
    subtitulo: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 10,
        marginHorizontal: 35,
        fontFamily: 'sans-serif'
    },
    imagen: {
        borderRadius: 150,
        marginTop: 25,
        width: 170,
        height: 170,
        marginBottom: 70,
    },
    texto: {
        textAlign: 'left',
        //marginLeft: 11,
        fontSize: 18,
    },
    escribir: {
        marginTop: 15,
        marginBottom: 15,
        height: 35,
        width: 270,
        backgroundColor: '#DAE4EC',
        borderRadius: 20,
        paddingLeft: 20
    },
    boton: {
        fontWeight: 'bold'
    },
    menu: {
        textAlign: 'left',
        fontSize: 16,
        fontFamily: 'sans-serif'
    }
});

const botones = StyleSheet.create({
    inicio: {
        marginTop: 35,
        width: 180,
        //marginBottom: 45,
    },
    continuar: { //Debe ser a un view por lo que veo
        position: 'absolute',
        right: 35,
        bottom: 50,
    },
    texto: {
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#3DA9FC',//'rgb(61, 169, 252, 0.2)',//'#3DA9FC',
        width: 180,
        height: 42,
    },
    sos: {
        //flex: 1, 
        top: 80,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#F41C1C',
        width: 250,
        height: 250,
        borderRadius: 120,
    },
    colgar: {
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#F41C1C',
        borderRadius: 120,
        top: 380
    },
    menu: {
        alignItems: 'center',
        justifyContent: 'center',
        weight: 200,
        height: 180,
        borderRadius: 30,
        backgroundColor: '#64BAFC',
        padding: 15,
        paddingBottom: 0,
        paddingTop: 0
    },
    contactos: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius: 30,
        backgroundColor: '#64BAFC',
        opacity: 0.7,
        //padding: 10,
        paddingBottom: 10,
        height: 100,
        width: 150,
        margin: 15
    },
});

const imagen = StyleSheet.create({
    contactos: {
        width: 60,
        height: 60,
        borderRadius: 150
    }
});

const llamada = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        textAlign: 'center',
      },
      titleText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
      },
      titleTextsmall: {
        marginVertical: 8,
        fontSize: 16,
      },
      buttonStyle: {
        justifyContent: 'center',
        marginTop: 15,
        padding: 10,
        backgroundColor: '#8ad24e',
      },
      buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
      },
      textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
      },
});

export { texto, botones, pantalla, imagen, llamada };