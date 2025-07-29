import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Button, View, ImageBackground, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import Checkbox from 'expo-checkbox';
import {mainColor, mainRadius} from '../constant'

export default function App(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleForgotPassword = () => {
  Alert.alert('Forgot Password', 'Redirecting to Forgot Password...');
};

  
  return (
    <ImageBackground
      source={require('../../assets/images/chapter2.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../../assets/images/summit_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <TextInput
          style={styles.input}
          placeholder="Email or Phone Number"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.passwordContainer}>
        <TextInput
          style={styles.password}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => props.navigation.navigate('HomeDrawer')}>
          <Image
            source={require('../../assets/images/face-id.png')}
            style={styles.faceIdLogo}
            resizeMode="contain"
          />
        </TouchableOpacity>
        </View>

        

        <View style={styles.rememberContainer}>
          <Checkbox
            value={rememberMe}
            onValueChange={setRememberMe}
            color={rememberMe ? 'red' : undefined}
          />
          <Text style={styles.rememberText}>Remember</Text>

          <TouchableOpacity onPress={() => props.navigation.navigate('resetPassword')}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
          
        </View>

    	<View style={styles.buttonContainer}>
          <Button
            color="white"
            title="Login"
            onPress={() => Alert.alert('Login', 'Login button pressed')}
          />

        </View>

        
        
        <Image
          source={require('../../assets/images/uul2.png')}
          style={styles.uul}
          resizeMode="contain"
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  passwordContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '2%',
    top: '18%',
    width: '65%',
    height: '6%',
    justifyContent: 'space-between'
  },
  background: {
    flex: 1,
    color: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  buttonContainer: {
    top: '20%',
    borderWidth: '-2%',
    borderRadius: mainRadius,
    padding: '1.5%',
    margin: '2.5%',
    backgroundColor: mainColor,
    width: '65%',
  },
  uul: {
    // width: '100%',
    height: '40%',
    // position: 'absolute',
    bottom: '-28%',
    alignSelf: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: '55%',
    height: '30%',
    position: 'absolute',
    top: '2%',     
  },
  input: {
    width: '65%',
    height: '6%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: mainRadius,
    paddingHorizontal: 10,
    marginVertical: 8,
    backgroundColor: 'white',
    top: '18%',
  },
  password: {
    width: '70%',
    height: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: mainRadius,
    paddingHorizontal: '5%',
    marginVertical: '2%',
    backgroundColor: 'white',
  },
    faceIdLogo: {
    width: 60,
    height: 60,
  },
  rememberContainer: {
    background: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '2%',
    top: '19%',
    width: '65%',
  },
  rememberText: {
    color: 'black',
    fontSize: 16,
    top: '0%',
    right: '-2%',
  },
  forgotPassword: {
    color: '#0645AD',
    textDecorationLine: 'underline',
    fontSize: 16,
    left: '19%',
  },
});