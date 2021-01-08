import React from 'react';
import {  Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { globalStyles } from '../styles/global'

export default function About({navigation}) {
    
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About Screen</Text>
        </View>
    )
}

