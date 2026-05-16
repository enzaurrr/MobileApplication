import { useState } from 'react'; 
import { Image } from 'expo-image';
import { Button, StyleSheet, View, Text, TextInput } from 'react-native'; 

export default function App() {

  const myName = "Enzo"; 
  const greet = (name) => {
    return `Hi ${name}! Hope you're having a great day.`; 
  };
  const classmates = ["Vera", "Bu", "Raf", "Mish", "Sir"]; 
  console.log(classmates.map(name => greet(name)));
  
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  const counterMessage = count > 0 
    ? `${name || 'Enzo'}, you tapped ${count} times!` 
    : "Tap the + button to start";

  return (
    <View style={s.screen}>
      <Image 
        source={{ uri: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png' }} 
        style={s.photo} 
      />
      
      <TextInput
        placeholder="Type your name..."
        onChangeText={setName}
        value={name}
        style={s.input}
      />
      
      <Text style={s.name}>
        {name === '' ? "Please enter your name" : `Hello, ${name}!`}
      </Text>

      <Text style={s.counterText}>{counterMessage}</Text>

      <View style={s.buttonContainer}>
        <Button title="+" onPress={() => setCount(count + 1)} />
        <Button title="-" onPress={() => setCount(count - 1)} />
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>
      
      <Text style={s.bio}>Bachelor of Multimedia Arts</Text>
      <Text style={s.bio}>He / Him - Specializes in Film</Text>
    </View>
  );
}

// Added multiple useState blocks, a tap counter, and conditional rendering messages. 05/16/2026
const s = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#fff' 
  },
  photo: { 
    width: 120, 
    height: 120, 
    borderRadius: 60,
    marginBottom: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: 250,
    borderRadius: 5,
    textAlign: 'center'
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginTop: 12 
  },
  counterText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 220,
    marginVertical: 15
  },
  bio: { 
    fontSize: 14, 
    color: '#888',
    textAlign: 'center',
    marginTop: 4
  }
});