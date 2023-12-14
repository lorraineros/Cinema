import React, { useEffect, useState } from 'react';
import styles from './styles';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getToken } from '../../redux/features/token/token-slice';

const Start = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const token = useSelector((state) => {
    return state.token.token;
  });

  useEffect(() => {
    const username = "group13";
    const password = "131313"
    dispatch(getToken(username, password));
  }, [dispatch])

  const login = () => {
    if (token && token !== undefined) {
      navigate('Cinemas');
    }
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={ styles.submitButton } onPress={() => login()}>
          <Text style={ styles.buttonText }>Start</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Start;
