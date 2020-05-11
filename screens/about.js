import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import Carosel from '../components/Carosel';
import Header from '../components/Header';


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
  




    const [lists, setLists] = useState
        ([
            { name: 'Amara Uzoma', key: ' 1' },
            { name: 'Tomi Akingba', key: '2' },
            { name: 'John Williams', key: '3' },
            { name: 'Kene OReily', key: '4' },
            { name: 'Sianese Mariead', key: '5' },
            { name: 'Shauna Wilkins', key: '6' },
        ]);




    const [list, setList] = useState
        ([
            { title: 'Nike Air Force 1', rating: 5, body: 'Love these Shoes, they are truely amazing . So Comfy', key: ' 1' },
            { title: 'Nike VapourMax', rating: 5, body: 'Very Stylish Show would Recommend', key: '2' },
            { title: 'Adidas Superstars', rating: 4, body: 'Sleek design and very nice to wear', key: '3' },
            { title: 'Fila Distruptors', rating: 3, body: 'Clucky and very bulky', key: '4' },
            { title: 'Jordan 1', rating: 5, body: 'Very In Fashion Right Now', key: '5' },
        ]);


    return (
        <View style={globalStyles.container}>
            <ScrollView>
                <Carosel images={images} />
                <Header />
                <View style={styles.body}>
                    <Text style={styles.boldText}>DrumRolls please ..... <Text>Our</Text> new App</Text>
                    <Text style={styles.boldText}>Welcome to AWGE fashion Store now available on IOS and soon on the android
                    </Text>

                    <Text>______________________________________________</Text>
                    <Text style={styles.boldText}>ABOUT</Text>
                    <Text>
                    Awge Fashion plc, more commonly known as just Awge, is a sports-fashion retail company based in Bury, Greater Manchester, England with shops throughout the United Kingdom, Europe, the United States, Asia and Australia. It is listed on the London Stock Exchange and is a constituent of the FTSE 100 Index. It is a subsidiary of the Pentland Group.
                    </Text>
                </View>

                <Text>______________________________________________________</Text>

               
                        <View style={styles.body}>
                            <Text style={styles.boldText}>Top 5 Reviews</Text>
                            <Text> Theses are the hottest prodcts we have on sale on our websites  </Text>
                        </View>
                        <Text>_____________________________________________________</Text>
                        <FlatList
                            data={list}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => navigation.navigate('Shoes', item)}>
                                    <Card>
                                        <Text styles={globalStyles.titleText}>{item.title}</Text>
                                    </Card>
                                </TouchableOpacity>
                            )} />

                <Text>My name is:  <Text style={styles.boldText}>{name}</Text> and Have you heard of our website?:  <Text style={styles.boldText}>{Response}</Text></Text>

                <Text style={styles.boldText}>Here we have a list of users that use our Website</Text>
                {lists.map((items) => {
                    return (
                        <View key={items.key}>
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