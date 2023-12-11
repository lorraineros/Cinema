import { StatusBar } from 'expo-status-bar';
import styles from './styles';
import { StyleSheet, Text, View } from 'react-native';

const CinemaDetail = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>Cinema Detail!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default CinemaDetail;
