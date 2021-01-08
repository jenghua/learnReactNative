import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.titele}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral'
    },
    titele: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})