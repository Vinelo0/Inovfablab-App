import React, { useState } from 'react';
import estilos from './src/estilos';
import { Link, NavigationContainer } from '@react-navigation/native';
import Video from 'react-native-video';
import {View, TouchableHighlight, ScrollView, TextInput, Text, Image, ImageBackground, StyleSheet, Linking} from 'react-native';
import { TouchableOpacity } from 'react-native';


 function App() {
   return (

      <ImageBackground source ={require("./src/assets/imagens/Fundo.jpg")} style={estilos.fundo}>

        <View style={estilos.view}>

          <TouchableHighlight onPress={()=>Linking.openURL("https://inovfablab.unisanta.br")}>
            <Image source={require('./src/assets/imagens/logofablab.png')} style={estilos.logo} ></Image>
          </TouchableHighlight>

        </View>

        <View style={estilos.view}>

          <TouchableOpacity style={estilos.botao1} activeOpacity={0.7}>
            <Text style ={estilos.txt}>Entrar no FabManager</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.botao2} activeOpacity={0.7}>
            <Text style ={estilos.txt}>Ficha de Autorização</Text>
          </TouchableOpacity>

        </View>

        <TouchableHighlight onPress={()=>Linking.openURL("https://www.unisanta.br")} style={estilos.unisanta}>
          <Image source={require('./src/assets/imagens/unisanta.png')} style={estilos.unisanta}/>
        </TouchableHighlight>

      </ImageBackground>
   )
  }

export default App;
