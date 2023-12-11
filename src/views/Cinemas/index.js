import React, { useEffect, useState } from 'react';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CinemaList from '../../components/CinemaList';

const Cinemas = ({ navigation: {navigate} }) => {
  const cinemas = [{id: 0}];
  
  return (
    <View style={styles.container}>
      <Text>Cinema!</Text>
      <CinemaList cinemas={cinemas}/>
    </View>
  );
}

export default Cinemas;
