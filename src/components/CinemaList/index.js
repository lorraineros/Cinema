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

export default CinemaList;

