import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import TaskList from './src/components/TaskList/index';
import * as Animatable from 'react-native-animatable';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);



export default function App() {

  const[task, setTask] = useState([
    {key: 1, task: 'Comprar pão'},
    {key: 2, task: 'Comprar leite'},
    {key: 3, task: 'Comprar uva'},
    {key: 4, task: 'Comprar chucrute'},
    {key: 5, task: 'Comprar ervilha'},


  ]);

  return(
    <SafeAreaView style ={styles.container}>
      <StatusBar backgroundColor = "#171d31" barStyle="light-content" />


      <View style={styles.content}>
        <Text style={styles.title}> Lista To-Do </Text>
      </View>

      
      <FlatList
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false} //barra de rolagem do lado (false:desabity)
        data={task}
        keyExtractor={(item) => String(item.key)}
        renderItem={ ({item}) => <TaskList data={item} /> }

      
      />
      


      <AnimatedBtn 
      style={styles.fab}
      useNativeDriver
      animation="bounceInUp"
      duration={1500}
      >
        <Ionicons name="ios-add" size={35} color="#fff"/>

      </AnimatedBtn>

    



    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#171D31'
  },

  content:{

  },

  title:{
    marginTop: 10,
    paddingBottom: 10,
    fontSize:25,
    textAlign: 'center',
    color:'#fff'

  },

  fab:{
    position:'absolute',
    width: 60,
    height:60,
    backgroundColor: '#0094ff',
    alignItems: 'center',
    justifyContent:"center",
    borderRadius:30,
    right:25,
    bottom:25,
    elevation:2,
    zIndex:9,
    shadowColor:'#000',
    shadowOpacity:0.2,
    shadowOffset:{
      width:1,
      height:3,
    }



  }



})


//SafeAreaView - cria uma caixa, para que as informaçoes não derretam para as status bar