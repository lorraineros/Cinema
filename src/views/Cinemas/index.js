import React, { useEffect, useState } from 'react';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CinemaList from '../../components/CinemaList';

const Cinemas = ({ navigation: {navigate} }) => {
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <CinemaList />
      </View>
    </ScrollView>
  );
}

export default Cinemas;
