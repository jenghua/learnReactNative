import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('shaun');
  const [age, setAge] = useState('30');
  const [people, setPeople] = useState([
    {name: 'shaun', id: '1'},
    {name: 'yoshi', id: '2'},
    {name: 'mario', id: '3'},
    {name: 'luigi', id: '4'},
    {name: 'peach', id: '5'},
    {name: 'toad', id: '6'},
    {name: 'bowser', id: '7'},
  ]);
  //const [person, setPerson] = useState({ name: 'mario', age: 40});

  const clickHandler = () => {
    setName('chun-li');
    //setPerson({name: 'luigi', age: 45});
  }

  const pressHandler = (id) =>{
    console.log(id);
    setPeople(((prevPeople) =>{
      return prevPeople.filter(person => person.id != id)
    }))
  }

  return (
    <View style={styles.container}>
      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
          
        )}
      />


      {/* <ScrollView>
        { people.map((item) =>(
          <View>
            <Text style={styles.item} key={item.key}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}


        <Text>His name is {name} and his age is {age}</Text>
        <TextInput
        multiline
         style={styles.input}
          placeholder='e.g John Doe' onChangeText={(val) => setName(val)}/>

        <TextInput
        keyboardType= 'numeric'
         style={styles.input}
          placeholder='e.g 99' onChangeText={(val) => setAge(val)}/>

        <View style={styles.buttonContainer}>
          <Button title='update state' onPress={ clickHandler }/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  }
});
