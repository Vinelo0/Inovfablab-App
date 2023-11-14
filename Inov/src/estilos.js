import React from "react";
import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  fundo: {
    flexGrow: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    width: "100%",
    height: "100%",
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },

  view: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    spacing: 20,
  },

  botao1: {
    borderRadius: 20,
    borderColor: "#fff",
    backgroundColor: "#2b156c",
    width: 180,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderWidth: 2,
  },

  botao2: {
    borderRadius: 20,
    borderColor: "#fff",
    backgroundColor: "#dc261e",
    width: 180,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderWidth: 2,
  },

  txt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    justifyContent: "center",
    textAlign: "center",
  },

  view2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  unisanta: {
    width: 75,
    height: 75,
    resizeMode: "contain",
    position: "absolute",
    bottom: 3,
    right: 3,
  },

  loginInp: {
    width: 150,
    height: 40,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: "#fff",
    padding: 10,
    color: "#000",
    
  },
  viewLogin: {
    backgroundColor: "#fff",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  viewLoginWhite: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    minWidth: 280,
    height: 400,
    textAlign: "center",
    borderRadius: 30,
    borderWidth: 2,
    opacity: 1,
    position: "absolute",
  },
  loginLabelInput: {
    fontSize: 16,
    position: "relative",
  },
  loginImageInput: {
    width: 30,
    height: 30,
    margin: 8,
  },
  loginViewGrey: {
    backgroundColor: "#eee",
    minWidthwidth: "80%",
    height: "60%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    
  },
  loginConfirma:{
    minWidth:140,
    minHeight:40,
    backgroundColor:'#9e2626',
    color:'#fff',
    borderRadius:10,
    borderWidth:1,
    padding:2,
    justifyContent:'center'
  },
  viewTeste:{
    marginTop:15,
    color:'#00f',
    fontSize: 20,
    textDecorationLine:'underline',
    justifyContent: "center",
    textAlign: "center",
  }
});

export default estilos;

