import { StyleSheet } from 'react-native';
import { darkerBlue, stTropaz } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'start'
  },
  title: {
    padding: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: stTropaz
  },
  paragraph: {
    fontSize: 17,
    color: darkerBlue
  }
});
