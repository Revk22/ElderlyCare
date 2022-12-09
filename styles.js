import { StyleSheet } from "react-native";

const pantalla = StyleSheet.create({
    base: {
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: 'white' 
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

const botones = StyleSheet.create({
    inicio: {
        marginTop: 45,
        width: 180,
        //marginBottom: 45,
    },
    continuar: { //Debe ser a un view por lo que veo
        position: 'absolute',
        right: 35,
        bottom: 50,
    }
});

export {texto, botones, pantalla};