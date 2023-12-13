import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import styles from './styles';

const MovieDetail = ({ route }) => {
  const { title, poster, plot, durationMinutes, year, genres, cinemaShowtimes } = route.params;

  console.log('Movie data:', { title, poster, plot, durationMinutes, year, genres });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Image
          style={styles.image}
          source={{ uri: poster }}
          resizeMode="contain"
        />
        <Text style={styles.plot}>{plot}</Text>
        <Text style={styles.details}>Duration: {durationMinutes} minutes</Text>
        <Text style={styles.details}>Year of Release: {year}</Text>
        <View style={styles.genreContainer}>
          {genres.map((genre, index) => (
            <Text key={index} style={styles.genre}>{genre.Name}</Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default MovieDetail;
