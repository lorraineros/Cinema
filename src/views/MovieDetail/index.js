import styles from './styles';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const MovieDetail = ({ route }) => {
  const { name, image, plot, runtime, released, genre } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.cinemaTitle}>{ name }</Text>
      </View>
    </ScrollView>
  );
}

export default MovieDetail;
