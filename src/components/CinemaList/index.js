import PropTypes from 'prop-types';
import styles from './styles';
import React from 'react';
import { View } from 'react-native';

import Cinema from '../Cinema';

const CinemaList = ({ cinemas }) => {
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
}

export default CinemaList;

