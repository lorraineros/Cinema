import React, { useState } from 'react';
import styles from './styles';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getToken } from '../../redux/features/token/token-slice';

const Login = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const token = useSelector((state) => {
    return state.token.token;
  });

  const login = (username, password) => {
    dispatch(getToken(username, password));
    console.log(username, password)
    console.log('token', token);
    if (token && token !== undefined) {
      console.log('t2', token)
      navigate('Cinemas');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Username</Text>
      <TextInput 
        style={styles.input}
        placeholder="group13"
        value={username}
        onChangeText={(text) => setUsername(text)}/>
      <Text style={styles.paragraph}>Password</Text>
      <TextInput 
        style={styles.input}
        placeholder="131313"
        value={password}
        onChangeText={(text) => setPassword(text)}/>
        <TouchableOpacity style={ styles.submitButton } onPress={() => login(username, password)}>
          <Text style={ styles.buttonText }>Login</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Login;
