import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput ,ScrollView,FlatList} from 'react-native';
import Header from './components/Header';
import Menus from './components/MenuList';
import AddTo from './components/addToList';
import Navigator from './routes/homeStack';

export default function App (){
const[name, setName] = useState('')
const [Response, setResponse] = useState('')
  const [menu, setMenu] = useState
    ([
      { text: 'Shoes', key: ' 1' },
      { text: 'Tracksuit', key: '2' },
      { text: 'Jackets', key: '3' },
      { text: 'Hoddies', key: '4' },
      { text: 'Bottoms', key: '5' },
    ]);

const pressHandler = (key) => {
setMenu((prevMenu) => {
  return prevMenu.filter(menu => menu.key != key);

});
}

const submitHandler = (text) => {
setMenu((prevMenu) => {
return[
{ text: text, key: Math.random().toString() },
  ...prevMenu
      ];

})
  }




const [list, setList] = useState
([
  {name:  'shauwn', key: ' 1'},
  { name: 'shauwn', key: '2' },
  { name: 'shauwn', key: '3' },
  { name: 'shauwn', key: '4' },
  { name: 'shauwn', key: '5' },
  { name: 'shauwn', key: '6' },
  { name: 'shauwn', key: '7' },
]);

    return (
      <View style = {styles.container}>
        <Navigator />
      <ScrollView>
        <Header/>
          <View style={styles.body}>
          <Text style={styles.boldText}>DrumRolls please ..... <Text>Our</Text> new App</Text>
          <Text style={styles.boldText}>Welcome to AWGE fashion Store now available on IOS and soon on the android</Text>
          </View>


        <Text>Whats your name? </Text>
        <TextInput
        style={styles.inputs}
          placeholder='e.g. Amara Uzoma'
          onChangeText={(val) => setName(val)}
        />

        <Text>Have you heard of our website? </Text>
        <TextInput
          style={styles.inputs}
          placeholder='e.g. Yes or no'
          onChangeText={(val) => setResponse(val)}
        />

          
          <View style={styles.content}> 
            <AddTo submitHandler={submitHandler} />
          <View style={styles.list}> 
          <FlatList
          data={menu}
            renderItem={({item}) => (
           <Menus item={item} pressHandler={pressHandler} />

            )}

          />
          </View>
          </View>



        <Text>My name is:  <Text style={styles.boldText}>{name}</Text> and Have you heard of our website?:  <Text style={styles.boldText}>{Response}</Text></Text>
       
            <Text style={styles.boldText}>Here we have a list of users that use our Website</Text> 
       { list.map((items)=> {
            return (
              <View key = {items.key}>
                <Text style={styles.items}>
                  {items.name}
                </Text>
              </View> 

            )
          })}
        </ScrollView>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:50,
    paddingHorizontal:29   
     //alignItems: 'center',
    //justifyContent: 'center',
  },
  
  boldText: {
    fontWeight:'bold',
  },

  body: {
    backgroundColor: 'whitesmoke',
    margin: 25,
  },
  inputs: {
    borderWidth: 1,
    borderColor: "#777",
    padding:15,
    margin:20,
    width:200,
    
  },
  
  items: {
    marginTop:24,
    padding:50,
    backgroundColor: 'silver',
    fontSize:24

  },

 content: {
    padding: 40,
  },

list:{
    marginTop: 5,


  }
  

});
