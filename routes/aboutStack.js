import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Head from '../shared/head';
import React from 'react'; 

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Head navigation={navigation} title='About Awge' />,
            }
        }
    },

}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "whitesmoke"

    }

});

export default AboutStack;
