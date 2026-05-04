import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {

  
  const myName = "Enzo"; 
  
  const greet = (name) => {
    return `Hi ${name}! Hope you're having a great day.`; 
  };

  
  const classmates = ["Vera", "Bu", "Raf", "Mish", "Sir"]; 

 
  console.log(classmates.map(name => greet(name)));
  

  return (
    <View style={s.screen}>
      <Image 
        source={{ uri: 'https://scontent.fdvo1-2.fna.fbcdn.net/v/t39.30808-6/487359228_3035059053327499_7494414871431225746_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeF_B3aC0wfvJhBinaYKKR9pSmVyqNaTFfhKZXKo1pMV-NB_8w__hq-c1yQExki_pouICAPEzhsR42Jz5l_Md0Dq&_nc_ohc=2-3bbTqBAUkQ7kNvwH1t_up&_nc_oc=AdreCV3tXv5KjdYAwmOavwsjhX3zygLD471_2tYolvG5pQOBIoMA643IVLiNmg3Bsv6pRd-rB6IYExT3PBco_TJG&_nc_zt=23&_nc_ht=scontent.fdvo1-2.fna&_nc_gid=XfeJiR4RAfsh1JdeKaW0rA&_nc_ss=7b2a8&oh=00_Af1ULGpiM6I84SJm9Pg4VSwiHojItZRznYH66Oj7O4ytNA&oe=69F97F1A' }} 
        style={s.photo} 
      />
      
      <Text style={s.name}>John Enzo Salon</Text>
      
      <Text style={s.bio}>Bachelor of Multimedia Arts</Text>
      <Text style={s.bio}>He / Him - Specializes in Film</Text>
    </View>
  );
}

// I change the stylesheet to make the profile screen look better. 05/01/2026
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
    borderRadius: 60 
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