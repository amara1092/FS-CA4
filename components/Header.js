import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native';

export default function Header() {
return(
<View style={styles.header}>
<Text style={styles.boldText}>Awge Presents....s</Text>
</View>
)
}

const styles = StyleSheet.create({
    header: {
        height:50,
        backgroundColor: 'silver',
        paddingTop: 18,
        paddingHorizontal:110,
        textAlign: 'center'
    },
    boldText: {
        fontWeight: 'bold',
    },
});
