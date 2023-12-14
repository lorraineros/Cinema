import styles from './styles';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
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
  const movies = useSelector((state) => state.movie.movies);

  return (
    <ScrollView>
      <View style={styles.cinemaContainer}>
        <Text style={styles.cinemaTitle}>{ cinema['name'] }</Text>
        <Text style={styles.cinemaParagraph}>{ cinema['description'] ? cinema['description'].replace(/<br>/g, '').replace(/<b>/g, '') : cinema['description'] }</Text>
        <Text style={styles.cinemaParagraph}>{normalizedCinema.address}, {normalizedCinema.city}</Text>
        <Text style={styles.cinemaParagraph}>{ cinema['website'] }</Text>
      </View>
      <View style={styles.movieContainer}>
        <Text style={styles.movieTitle}>Movies</Text>
        <MovieList movies={movies} cinemaName={cinema['name']} />
      </View>
    </ScrollView>
  );
}

export default CinemaDetail;
