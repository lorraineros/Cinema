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
  runtime, 
  year, 
  genres
 }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigate('MovieDetail', { title, poster, plot, runtime, year, genres })}>
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

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired
};

export default Movie;