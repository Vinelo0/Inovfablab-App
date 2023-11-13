import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import estilos from "./estilos";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  TouchableHighlight,
  ScrollView,
  TextInput,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";

function Login({ navigation }) {
  return (
    <View
      style={estilos.viewLogin}
    >
      <ImageBackground
        source={require("./assets/imagens/Fundo.jpg")}
        style={[estilos.fundo,{opacity:0.5}]}
      >
        {/* <TextInput style={estilos.loginInp}></TextInput> */}
        <View style={estilos.viewLogin2}>

          
        </View>
      </ImageBackground>
      
    </View>
  );
}
export default Login;
