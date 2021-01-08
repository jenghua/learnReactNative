import React from 'react';
import {  Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { globalStyles } from '../styles/global'

export default function Home({navigation}) {

    const [reviews, setReviews] = useState([
        {title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        {title: 'Zelda, Breath of Fresh Air2', rating: 4, body: 'lorem ipsum', key: '2' },
        {title: 'Zelda, Breath of Fresh Air3', rating: 3, body: 'lorem ipsum', key: '3' }
    ])
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <FlatList 
                data={reviews}
                renderItem={({item}) =>(
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

