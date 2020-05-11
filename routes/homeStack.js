import{ createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import Shoes from '../screens/Shoes'; 
import Head from '../shared/head';
import React from 'react'; 

const screens = {
Home:{
    screen: Home,
    navigationOptions: ({navigation}) => {
       return {
            headerTitle: () => <Head navigation={navigation} title=''/>,
        }
    }
},

Shoes: {
    screen: Shoes,
    navigationOptions: {
        title: 'Shoes',
        headerStyle: { backgroundColor: '#555' }
    }
    }

}

const HomeStack = createStackNavigator(screens , {
 defaultNavigationOptions:{
headerTintColor:"whitesmoke"

 }

});

export default HomeStack;
