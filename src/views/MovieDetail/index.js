import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';

const MovieDetail = ({ route }) => {
  const { title, poster, plot, runtime, year, genres, showtimes } = route.params;

  console.log('Movie data:', { title, poster, plot, runtime, year, genres, showtimes });

  const renderSchedule = (showtime) => (
    showtime.schedule.map((scheduleItem, index) => (
      <View key={index} style={styles.scheduleItem}>
        <Text style={styles.showtime}>{scheduleItem.time}</Text>
        <TouchableOpacity 
          style={styles.purchaseButton} 
          onPress={() => Linking.openURL(scheduleItem.purchase_url)}>
          <Text style={styles.purchaseButtonText}>Buy Ticket</Text>
        </TouchableOpacity>
      </View>
    ))
  );

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
        <Text style={styles.details}>Duration: {runtime} minutes</Text>
        <Text style={styles.details}>Year of Release: {year}</Text>
        <View style={styles.genreContainer}>
          {genres.map((genre, index) => (
            <Text key={index} style={styles.genre}>{genre.Name}</Text>
          ))}
        </View>
        <View style={styles.showtimesContainer}>
          <Text style={styles.showtimesTitle}>Showtimes:</Text>
          {showtimes.map(renderSchedule)}
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetail;
