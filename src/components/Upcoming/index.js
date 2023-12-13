import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import styles from './styles';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getUpcomings } from '../../redux/features/upcoming/upcoming-slice';

const Upcoming = ({
  upcomingList,
  title
 }) => {
  const upcoming = upcomingList.find(c => c['title'] === title )
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate('UpcomingDetail', { upcoming })}>
      <View style={ styles.container }>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={{ uri: upcoming['poster'] }}/>
        <Text style={styles.title}>{ upcoming['title'] }</Text>
        <Text style={styles.paragraph}>{ upcoming['release-dateIS'] }</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Upcoming;