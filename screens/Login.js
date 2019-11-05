import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import Colors from '../constants/Colors.js';
import MusicTimeTitle from '../components/MusicTimeTitle';

const Login = props => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleSubmit = () => {
    if (usernameInput === 'bobSmith' && passwordInput === 'password') {
      props.navigation.navigate('Home');
      setUsernameInput('');
      setPasswordInput('');
      return;
    } else {
      Alert.alert('Invalid Credentials', 'Invalid username or password.', [
        { text: 'OK', style: 'cancel', onPress: resetInputFields },
      ]);
      return;
    }
  };

  let passwordField;

  const resetInputFields = () => {
    setUsernameInput('');
    setPasswordInput('');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.deepPurple}
        />
        <KeyboardAvoidingView behavior="position">
          <View style={styles.fullWrapper}>
            <View style={styles.headerWrapper}>
              <MusicTimeTitle />
            </View>
            <View style={styles.loginWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={() => passwordField.focus()}
                onChangeText={username => setUsernameInput(username)}
                value={usernameInput}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                returnKeyType="go"
                ref={input => {
                  passwordField = input;
                }}
                onChangeText={password => setPasswordInput(password)}
                value={passwordInput}
                onSubmitEditing={handleSubmit}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Go</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.deepPurple,
    alignItems: 'center',
  },
  fullWrapper: {
    marginTop: Platform.OS === 'ios' ? 200 : 200,
    paddingBottom: Platform.OS === 'ios' ? 50 : 18,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  loginWrapper: {
    backgroundColor: Colors.yellow,
    paddingTop: Platform.OS === 'ios' ? 20 : 10,
    paddingBottom: Platform.OS === 'ios' ? 20 : 30,
    width: 300,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 30 : 20,
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    width: '80%',
    fontSize: Platform.OS === 'ios' ? 30 : 20,
    fontWeight: 'bold',
    margin: Platform.OS === 'ios' ? 20 : 7,
  },
  button: {
    width: 200,
    backgroundColor: Colors.brightPink,
    marginTop: Platform.OS === 'ios' ? 30 : 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Login;
