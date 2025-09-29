import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import Logo from './components/logo'

export default function App() {
const {fullname, setFullname} = useState("Mary");
const [fname, setFname] = useState("Mariam");
const [lname, setLname] = useState("Osomoku");
const [dob, setDob] = useState("05 January 2004");
  return (
    <View >
    <Logo/><Text>Hello {fname} {lname}. You were born on {dob}</Text>
      <TextInput stylplaceholder="enter your name" onChangeText={setFullname}/>
      <TextInput placeholder="Enter your firstname" onChangeText={setFname}/>
      <TextInput placeholder="Enter your lastname" onChangeText={setLname}/>
      <TextInput placeholder="Enter your date of birth" onChangeText={setDob}/>
    </View>
  )
};




