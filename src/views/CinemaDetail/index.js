import styles from './styles';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import MovieList from '../../components/MovieList';

const CinemaDetail = ({ route }) => {
  const { name, description, address, phone, website } = route.params;
  const movies = useSelector((state) => {
    return state.movie.movies;
  });

  console.log( name, description, address, phone, website )
  console.log ( movies )
  return (
    <ScrollView>
      <View style={styles.cinemaContainer}>
        <Text style={styles.cinemaTitle}>{ name }</Text>
        <Text style={styles.cinemaParagraph}>{ description ? description.replace(/<br>/g, '').replace(/<b>/g, '') : description }</Text>
        <Text style={styles.cinemaParagraph}>{ address }</Text>
        <Text style={styles.cinemaParagraph}>{ phone }</Text>
        <Text style={styles.cinemaParagraph}>{ website }</Text>
      </View>
      <View style={styles.movieContainer}>
        <Text style={styles.movieTitle}>Movies</Text>
        <MovieList movies={movies} cinemaName={name} />
      </View>
    </ScrollView>
  );
}

export default CinemaDetail;
