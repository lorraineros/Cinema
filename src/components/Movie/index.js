import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import styles from './styles';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getCinemas } from '../../redux/features/cinema/cinema-slice';

const Movie = ({
  movies,
  cinemaName,
  title
}) => {
  const { navigate } = useNavigation();
  const movie = movies.find(m => m.title === title )

  return (
    <TouchableOpacity onPress={() => navigate('MovieDetail', { movie, cinemaName })}>
      <View style={ styles.container }>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={{ uri: movie.poster }}/>
        <Text style={styles.title}>{ movie.title }</Text>
        <Text style={styles.paragraph}>{ movie.year }</Text>
        <View style={styles.genres}>
          {movie.genres.map((genre, index) => 
            <Text key={index} style={styles.genreParagraph}>{ genre.Name }</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Movie;