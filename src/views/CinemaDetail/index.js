import styles from './styles';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const CinemaDetail = ({ route }) => {
  const { name, description, address, phone, website } = route.params;

  return (
    <ScrollView>
      <View style={styles.cinemaContainer}>
        <Text style={styles.cinemaTitle}>{ name }</Text>
        <Text style={styles.cinemaParagraph}>{ description.replace(/<br>/g, '').replace(/<b>/g, '') }</Text>
        <Text style={styles.cinemaParagraph}>{ address }</Text>
        <Text style={styles.cinemaParagraph}>{ phone }</Text>
        <Text style={styles.cinemaParagraph}>{ website }</Text>
      </View>
      <View style={styles.movieContainer}>
        <Text style={styles.movieTitle}>Movies</Text>
      </View>
    </ScrollView>
  );
}

export default CinemaDetail;
