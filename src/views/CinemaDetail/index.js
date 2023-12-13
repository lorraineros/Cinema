import styles from './styles';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import MovieList from '../../components/MovieList';

const CinemaDetail = ({ 
  route
}) => {
  const { cinema } = route.params;
  const movies = useSelector((state) => {
    return state.movie.movies;
  });

  return (
    <ScrollView>
      <View style={styles.cinemaContainer}>
        <Text style={styles.cinemaTitle}>{ cinema['name'] }</Text>
        <Text style={styles.cinemaParagraph}>{ cinema['description'] ? cinema['description'].replace(/<br>/g, '').replace(/<b>/g, '') : cinema['description'] }</Text>
        <Text style={styles.cinemaParagraph}>{ cinema['address\t'] }, { cinema['city'] } </Text>
        <Text style={styles.cinemaParagraph}>{ cinema['phone'] }</Text>
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
