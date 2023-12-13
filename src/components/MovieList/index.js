import PropTypes from 'prop-types';
import styles from './styles';
import React, { useEffect, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import Movie from '../Movie';

const MovieList = ({ movies , cinemaName }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [cinemaFilter, setCinemaFilter] = useState(''); // State to store the cinema name for filtering

  // Filter movies based on cinema name
  useEffect(() => {
    const filtered = movies.filter((movie) => movie.showtimes.filter((cinema) => cinema.name === cinemaName));
    setFilteredMovies(filtered);
  }, [movies, cinemaFilter]);

  return (
    <View style={styles.container}>
      {/* Input for filtering by cinema name */}
      <TextInput
        style={styles.input}
        placeholder="Filter by cinema name"
        value={cinemaFilter}
        onChangeText={(text) => setCinemaFilter(text)}
      />
      {filteredMovies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </View>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      plot: PropTypes.string.isRequired,
      runtime: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired
    })
  ).isRequired,
};

export default MovieList;
