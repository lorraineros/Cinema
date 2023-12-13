import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import styles from './styles';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getCinemas } from '../../redux/features/cinema/cinema-slice';

const Movie = ({
  title, 
  poster, 
  plot, 
  durationMinutes, 
  year, 
  genres,
  showtimes,
  purchase_url
 }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigate('MovieDetail', { title, poster, plot, durationMinutes, year, genres, showtimes, purchase_url })}>
      <View style={ styles.container }>
        <Image
            style={styles.image}
            resizeMode='cover'
            source={{ uri: poster }}/>
        <Text style={styles.title}>{ title }</Text>
        <Text style={styles.paragraph}>{ year }</Text>
        <View style={styles.genres}>
          {genres.map((genre, index) => 
            <Text key={index} style={styles.genreParagraph}>{ genre.Name }</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Movie;