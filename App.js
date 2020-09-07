import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Modal, TextInput } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import TaskList from './src/components/TaskList/index';
import * as Animatable from 'react-native-animatable';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);



export default function App() {

  const[task, setTask] = useState([

  ]);

  const [open, setOpen] = useState(false);

  const[input, setInput] = useState('');

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
      onPress={() => setOpen(true)}
      >
        <Ionicons name="ios-add" size={35} color="#fff"/>

      </AnimatedBtn>

      <Modal
        animationType ="slide"
        transparent={false}
        visible={open}
      >
        <SafeAreaView style={styles.modal}>

          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setOpen(false) }>

              <Ionicons name="md-arrow-back" size={40} color="#FFF" style={{marginLeft:12, marginRight: 10}}/>

            </TouchableOpacity>
            <Text style={styles.modalTitle}>
              Nova Tarefa
            </Text>
          </View>

          <Animatable.View style={styles.modalBody} animation="fadeInUp" useNativeDriver> 
            <TextInput
              multiline={true}
              placeholderTextColor="#747474"
              autoCorrect={false}
              placeholder='O que precisa fazer hoje?'
              style={styles.input}
              value={input}
              onChangeText={(texto) => setInput(texto)}

            />

            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addBtnText}>Cadastrar</Text>
            </TouchableOpacity>

          </Animatable.View>


        </SafeAreaView>

      </Modal>

    



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
  },
  
  modal:{
    flex:1,
    backgroundColor:'#171D31',
  },
  modalHeader:{
    flexDirection: 'row',
    alignItems:'center',
    marginTop: 12,
    marginLeft: 10

  },
  modalTitle:{
    color: 'white',
    fontSize: 20,
  },

  modalBody:{
    marginTop: 15,
  },

  input:{
    fontSize: 15,
    marginLeft:10,
    marginRight:10,
    marginTop:30,
    backgroundColor:'#fff',
    borderRadius:8,
    padding: 9,
    height:85,
    textAlignVertical:'top',
    color:'#000'    
  },

  addBtn:{
    backgroundColor:'#FFF',
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight:10,
    borderRadius: 8,
    height:45,
  },
  addBtnText:{
    fontSize: 20
  }


})


//SafeAreaView - cria uma caixa, para que as informaçoes não derretam para as status bar