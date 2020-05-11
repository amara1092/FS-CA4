import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';

export default function Head({ navigation, title }){

const openmenu = () => {
navigation.openDrawer();
}

    return(
 <View style={styles.head}>
            <MaterialIcons name='menu' size={28} onPress={openmenu} style={styles.icon} />
        <View>
                <Text style={styles.headText}>{title} </Text>
                <Image source={require('../assets/AwgeLogo.jpg')} />
        

        </View>

 </View>



    )
}

const styles = StyleSheet.create({
head: {
marginRight: 190,
padding:2,
width: '100%',
height:'15%',
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: 'white',
},

headText: {
fontWeight: 'bold',
fontSize: 20,
color: '#333',
letterSpacing: 1,

},

icon:{
position:'absolute',
 left: 16
}

});
