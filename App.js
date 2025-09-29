import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import Logo from './components/logo'

export default function App()
 {function buttonClicked() {
    //Alert.alert("button clicked"); //This works on a mobile phone
    alert("button clicked"); // this works on the web version - try uncommenting one or the other lines as necessary
}

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
      <Button title="SUBMIT" onPress={buttonClicked}/>
    </View>
  )
};



