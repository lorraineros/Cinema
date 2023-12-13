import PropTypes from 'prop-types';
import styles from './styles';
import React, { useEffect, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import Movie from '../Movie';

const MovieList = ({ 
  movies, 
  cinemaName 
}) => {
  const filteredMovies = movies.filter((movie) =>
    movie.showtimes.some((showtime) => showtime.cinema.name === cinemaName)
  );

  return (
    <View style={styles.container}>
      {filteredMovies.map((movie) => (
        <Movie movies={movies} cinemaName={cinemaName} key={movie.id} {...movie} />
      ))}
    </View>
  );
};

export default MovieList;
