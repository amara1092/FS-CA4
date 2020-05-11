import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView,TouchableOpacity,TextInput} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import Carosel from '../components/Carosel';
import Header from '../components/Header';
import Menus from '../components/MenuList';
import AddTo from '../components/addToList';


const images = [
    'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/2951457/pexels-photo-2951457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/1735559/pexels-photo-1735559.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/2894637/pexels-photo-2894637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',

]

export default function Home({ navigation }) {
    const [name, setName] = useState('')
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
            return [
                { text: text, key: Math.random().toString() },
                ...prevMenu
            ];

        })
    }





    
return(
<View style={globalStyles.container}>
<ScrollView>
<Carosel images={images} />
            <Header />
            <Text>______________________________________________________</Text>

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
            <Text>______________________________________________________</Text>
            <Text>My name is:  <Text style={styles.boldText}>{name}</Text> and Have you heard of our website?:  <Text style={styles.boldText}>{Response}</Text></Text>
            <Text>______________________________________________________</Text>
            <Text>______________________________________________________</Text>
            <View style={styles.body}>
                <Text style={styles.boldText}>ChEcKL1ST</Text>
                <Text> Here you can add reminders on what you wanted to by when you vist our website</Text>
            </View>
            <Text>______________________________________________________</Text>
            <View style={styles.body}>
                <Text>Add to the List</Text>
            </View>
            <View style={styles.content}>
                <AddTo submitHandler={submitHandler} />
                <View style={styles.list}>
                    <FlatList
                        data={menu}
                        renderItem={({ item }) => (
                            <Menus item={item} pressHandler={pressHandler} />
                        )}/>
                   
</View>
            </View>
     </ScrollView>
     
</View>
  );
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 50,
            paddingHorizontal: 29
            //alignItems: 'center',
            //justifyContent: 'center',
        },

        boldText: {
            fontWeight: 'bold',
        },

        body: {
            backgroundColor: 'whitesmoke',
            margin: 25,
        },
        inputs: {
            borderWidth: 1,
            borderColor: "black",
            padding: 15,
            margin: 20,
            width: 200,

        },

        items: {
            marginTop: 24,
            padding: 50,
            backgroundColor: 'white',
            fontSize: 24

        },

        content: {
            padding: 40,
        },

        list: {
            marginTop: 5,


        }


    });