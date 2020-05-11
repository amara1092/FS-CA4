import{ createStackNavigator } from 'react-navigation-stack';
import{ createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Shoes from '../screens/Shoes';

const screens = {
Home:{
    screen: Home
},

Shoes: {
        screen: Shoes
    }

}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
