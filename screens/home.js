import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    const [list, setList] = useState
        ([
            { title: 'shauwn', rating: 5, body:'GreatApp',  key: ' 1' },
            { title: 'shauwn', rating: 5, body: 'GreatApp', key: '2' },
            { title: 'shauwn', rating: 5, body: 'GreatApp', key:'3' },
            { title: 'shauwn', rating: 5, body: 'GreatApp', key: '4' },
            { title: 'shauwn', rating: 5, body: 'GreatApp', key:'5' },
            { title: 'shauwn', rating: 5, body: 'GreatApp', key: '6' },
            { title: 'shauwn', rating: 5, body: 'GreatApp', key:'7' },
        ]);

   
    
return(
<View style={globalStyles.container}>
<FlatList
data={list}
renderItem={({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('Shoes', item )}>
<Text styles={globalStyles.titleText}>{ item.title }</Text>

    </TouchableOpacity>
)}

/>
</View>
  )
}

