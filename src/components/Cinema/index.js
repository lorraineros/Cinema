import React, { useEffect } from 'react';
import styles from './styles';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Cinema = ({
  cinemas,
  name
}) => {
  const { navigate } = useNavigation();
  const cinema = cinemas.find(c => c.name === name )

  return (
    <TouchableOpacity onPress={() => navigate('CinemaDetail', { cinema })}>
      <View style={ styles.container }>
        <Text style={styles.title}>{ cinema.name }</Text>
        <Text style={styles.paragraph}>{ cinema.website }</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cinema;