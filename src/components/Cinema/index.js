import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getCinemas } from '../../redux/features/cinema/cinema-slice';

const Cinema = ({
  id,
  name,
  description,
  address,
  phone,
  website
 }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const cinemas = useSelector((state) => {
    console.log(state);
    return state.cinema.value;
  });

  return (
    <TouchableOpacity onPress={() => navigate('CinemaList', { name })}>
      <View style={ styles.container }>
        <Text style={styles.title}>Cinema</Text>
        <Text> {id} </Text>
        <Button title="Add" onPress={() => dispatch(getCinemas())} />
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