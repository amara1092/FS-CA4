import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Shoes({ navigation }) {
    return (
        <View>
            <Text style={globalStyles.container}>Shoes</Text>
            <Card>
            <Text>{ navigation.getParam('title') }</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
        </Card>
        </View>
    )
}
