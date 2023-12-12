import PropTypes from 'prop-types';
import styles from './styles';
import React, { useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getCinemas } from '../../redux/features/cinema/cinema-slice';
import Cinema from '../Cinema';

const CinemaList = () => {
  const dispatch = useDispatch();
  const cinemas = useSelector((state) => {
    return state.cinema.cinemas;
  });

  useEffect(() => {
    dispatch(getCinemas());
  }, [])

  return (
    <View style={styles.container}>
      {cinemas.map(c => <Cinema key={c.name} {...c} />)}
    </View>
  );
};

CinemaList.propTypes = {
  cinemas: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired
  })).isRequired,
  navigate: PropTypes.func.isRequired
}

export default CinemaList;

