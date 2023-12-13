import PropTypes from 'prop-types';
import styles from './styles';
import React, { useEffect, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import Movie from '../Movie';

const MovieList = ({ movies , cinemaName }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Filter movies based on cinema name
  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.showtimes.some((showtime) => showtime.cinema.name === cinemaName)
    );

    setFilteredMovies(filtered);
  }, [movies]);

  return (
    <View style={styles.container}>
      {filteredMovies.map((movie) => (
        <Movie movies={movies} key={movie.id} {...movie} />
      ))}
    </View>
  );
};

export default MovieList;
