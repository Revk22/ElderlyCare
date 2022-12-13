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
        width: 400,
        height: 80
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
    }
});
/*
const datepicker = StyleSheet.create({
    datePickerContainer: {
        width: 260,
        margin: 20,
    },
    datePickerLabel: {
        fontSize: 18,
        fontWeight: "bold"
    },
    fecha: {
        fontSize: 20,
        backgroundColor: "darkblue",
        color: 'lightblue'
    }

})
*/
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
        weight: 120,
        height: 120,
        borderRadius: 30,
        backgroundColor: '#64BAFC',
        opacity: 0.7,
        padding: 20,
        paddingBottom: 0,
    },
    contactos: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: '#64BAFC',
        opacity: 0.7,
        padding: 20,
        paddingBottom: 10,
    },
});

export { texto, botones, pantalla };