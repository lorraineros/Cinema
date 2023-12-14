import React, { useEffect } from 'react';
import styles from './styles';
import { ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../redux/features/movie/movie-slice';
import MovieList from '../../components/MovieList';

const normalizeKeys = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach(key => {
    const normalizedKey = key.trim();
    newObj[normalizedKey] = obj[key];
  });
  return newObj;
};

const CinemaDetail = ({ route }) => {
  const { cinema } = route.params;
  const normalizedCinema = normalizeKeys(cinema);
  const dispatch = useDispatch();
  const token = useSelector((state) => {
    return state.token.token;
  });

  useEffect(() => {
    dispatch(getMovies(token));
  }, [dispatch])

  const movies = useSelector((state) => state.movie.movies);
  return (
    <ScrollView>
      <View style={styles.cinemaContainer}>
        <Text style={styles.cinemaTitle}>{ cinema.name }</Text>
        <Text style={styles.cinemaParagraph}>{ cinema.description ? cinema.description.replace(/<br>/g, '').replace(/<b>/g, '') : cinema.description }</Text>
        <Text style={styles.cinemaParagraph}>{normalizedCinema.address}, {cinema.city}</Text>
        <Text style={styles.cinemaParagraph}>{cinema.phone}</Text>
        <Text style={styles.cinemaParagraph}>{ cinema.website }</Text>
      </View>
      <View style={styles.movieContainer}>
        <Text style={styles.movieTitle}>Movies</Text>
        <MovieList movies={movies} cinemaName={cinema.name} />
      </View>
    </ScrollView>
  );
}

export default CinemaDetail;
