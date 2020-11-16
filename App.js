import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { 
  StyleSheet, 
  Animated, 
  TouchableOpacity, 
  Text, 
  View, 
  KeyboardAvoidingView, 
  Image, 
  TextInput
} from 'react-native';

export default function App() {

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 90}));
  

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 30,
    }).start();
  }, [])
  
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logo}>
        <Image 
          source={require('./src/img/logo.png')}
        />
      </View>
      <Animated.View 
        style={[
          styles.container,
          {
            transform: [
              { translateY: offset.y}
            ]
          }
        ]}
        >
        <TextInput 
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput 
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 100,
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: "700",
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#FFFFFF',
    fontWeight: "500",
  }
});


