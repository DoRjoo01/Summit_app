import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TextInput,
  Button,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Card } from 'react-native-paper';

export default function ResetPasswordScreen() {
  return (
    <ImageBackground
      source={require('../../assets/images/chapter2.png')}
      style={styles.background}
      resizeMode="cover">
      <SafeAreaView style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.paragraph}
        placeholder="Email or Phone Number"
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.sendContainer}>
        <Text style={styles.sendText}>Send</Text>
      </TouchableOpacity>
    </View>

        <Image
          source={require('../../assets/images/left-arrow.png')}
          style={styles.leftArrow}
          resizeMode="contain"
        />

        <Text style={styles.topic}>
          Reset Password
        </Text>

        <Card style={styles.card}>
        </Card>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  paragraph: {
    width: '65%',
    height: '6%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginVertical: 8,
    backgroundColor: 'white',
    top: '48%', 
  },
  sendContainer: {
    borderWidth: '2%',
    borderRadius: 12,
    padding: '1.5%',
    margin: '6.5%',
    backgroundColor: '#E30016',
    width: '25%',
    height: '60%',
  },
  leftArrow: {
    width: '8%',
    height: '8%',
    right: '37%',
    top: '-4%',
  },
  topic: {
    top: '-9%',
    fontSize: 15,
  },
  sendText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: '48%',
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'gray',
    width: '65%',
    height: '6%',
    paddingHorizontal: 5,
},


});