import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';

const MovieDetail = ({ 
  route
}) => {
  const { movie, cinemaName } = route.params;
  const showtimes = movie['showtimes'].filter((showtime) =>
    showtime.cinema.name === cinemaName
  );

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
      <View style={styles.infoContainer}>
        <Image
          style={styles.image}
          source={{ uri: movie['poster'] }}
        />
        <View>
          <Text style={styles.title}>{movie['title']}</Text>
          <Text style={styles.details}>Duration: { movie['durationMinutes'] } minutes</Text>
          <Text style={styles.details}>Year of Release: { movie['year'] }</Text>
          <View style={styles.genreContainer}>
            { movie['genres'].map((genre, index) => (
              <Text key={index} style={styles.genre}>{ genre.Name }</Text>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.plot}>{ movie['plot'] }</Text>
        <View style={styles.showtimesContainer}>
          <Text style={styles.showtime}>Showtimes</Text>
          <View style={styles.scheduleItem}>
            { showtimes.map(renderSchedule) }
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetail;
