import PropTypes from 'prop-types';
import styles from './styles';
import React from 'react';
import { View } from 'react-native';
import Upcoming from '../Upcoming'

const UpcomingList = ({ upcoming }) => {
  return (
    <View style={styles.container}>
      {upcoming.map(c => <Upcoming upcomingList={upcoming} key={c.title} {...c} />)}
    </View>
  );
};

export default UpcomingList;

