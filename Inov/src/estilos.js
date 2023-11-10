import React from "react";
import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({

    fundo:{
        flexGrow:1,
        resizeMode:'cover',
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
    },

    logo:{
        width:120,
        height:120,
        resizeMode:'contain',
    },

    view:{
        flexGrow:1,
        justifyContent:'center',
        alignItems:'flex-start',
        spacing: 20,
    },

    botao1:{
        borderRadius:25,
        borderColor:"#fff",
        backgroundColor:'#2b156c',
        width:180,
        height:80,
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        borderWidth:2,
        
    },

    botao2:{
        borderRadius:25,
        borderColor:"#fff",
        backgroundColor:'#dc261e',
        width:180,
        height:80,
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        borderWidth:2,
    },
    
    txt:{
        fontSize:20,
        fontWeight: 'bold',
        color: "#fff"
    },

    view2:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },

    unisanta:{
        width:70,
        height:70,
        resizeMode:'contain',
        position:'absolute',
        bottom:0,
        right:0.5
    }
})

export default estilos