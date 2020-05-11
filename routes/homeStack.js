import{ createStackNavigator } from 'react-navigation-stack';
import{ createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Shoes from '../screens/Shoes';

const screens = {
Home:{
    screen: Home,
    navigationOptions: {
        title:'Welcome',
        headerStyle: {backgroundColor: 'white'}
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

export default createAppContainer(HomeStack);
