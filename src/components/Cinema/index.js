import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import styles from './styles';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getCinemas } from '../../redux/features/cinema/cinema-slice';

const Cinema = ({
  name,
  description,
  address,
  phone,
  website
 }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate('CinemaDetail', { name, description, address, phone, website })}>
      <View style={ styles.container }>
        <Text style={styles.title}>{ name }</Text>
        <Text style={styles.paragraph}>{ website }</Text>
      </View>
    </TouchableOpacity>
  );
};

Cinema.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired
}

export default Cinema;