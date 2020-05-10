import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput ,ScrollView,FlatList} from 'react-native';

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
    ])
const [list, setList] = useState
([
  {name: 'shauwn', key: ' 1'},
  { name: 'shauwn', key: '2' },
  { name: 'shauwn', key: '3' },
  { name: 'shauwn', key: '4' },
  { name: 'shauwn', key: '5' },
  { name: 'shauwn', key: '6' },
  { name: 'shauwn', key: '7' },
]);

    return (
      <View style = {styles.container}>
      <ScrollView>
         <View style={styles.header}>
            <Text style={styles.boldText}>Awge Presents....s</Text>
          </View>
          <View style={styles.body}>
          <Text style={styles.boldText}>DrumRolls please ..... <Text>Our</Text> new App</Text>
          <Text style={styles.boldText}>Welcome to AWGE fashion Store now available on IOS and soon on the android</Text>
          </View>


        <Text>Whats your name? </Text>
        <TextInput 
        style={styles.input}
          placeholder='e.g. Amara Uzoma'
          onChangeText={(val) => setName(val)}
        />

        <Text>Have you heard of our website? </Text>
        <TextInput
          style={styles.input}
          placeholder='e.g. Yes or no'
          onChangeText={(val) => setResponse(val)}
        />
          <View style={styles.content}> 
          {/*to form */}

          <View style={styles.list}> 
          {/*LIST*/}
          <FlatList
          data={menu}
            renderItem={({item}) => (
            <Text>
              {item.text}
            </Text> 

            )}

          />
          </View>
          </View>



        <Text>My name is:  <Text style={styles.boldText}>{name}</Text> and Have you heard of our website?:  <Text style={styles.boldText}>{Response}</Text></Text>
       
            <Text style={styles.boldText}>Here we have a list of users that use our Website</Text> 
       { list.map((item)=> {
            return (
              <View key = {item.key}>
                <Text style={styles.item}>
                  {item.name}
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
  
  header:{
    backgroundColor: 'silver',
    padding: 20,
  },

  boldText: {
    fontWeight:'bold',
  },

  body: {
    backgroundColor: 'whitesmoke',
    margin: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding:15,
    margin:20,
    width:200,
    
  },
  
  item: {
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
