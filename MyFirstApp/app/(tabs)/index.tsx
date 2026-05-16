import { useState } from 'react'; 
import { Image } from 'expo-image';
import { StyleSheet, View, Text, TextInput } from 'react-native'; 

export default function App() {

  
  const myName = "Enzo"; 
  const greet = (name) => {
    return `Hi ${name}! Hope you're having a great day.`; 
  };
  const classmates = ["Vera", "Bu", "Raf", "Mish", "Sir"]; 
  console.log(classmates.map(name => greet(name)));
  
  
  const [name, setName] = useState('');

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
        {name ? `Hello, ${name}!` : "John Enzo Salon"}
      </Text>
      
      <Text style={s.bio}>Bachelor of Multimedia Arts</Text>
      <Text style={s.bio}>He / Him - Specializes in Film</Text>
    </View>
  );
}


// I added a TextInput component and used useState to make the name interactive. 05/15/2026
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
    width: 200,
    borderRadius: 5,
    textAlign: 'center'
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginTop: 12 
  },
  bio: { 
    fontSize: 14, 
    color: '#888',
    textAlign: 'center',
    marginTop: 4
  }
});