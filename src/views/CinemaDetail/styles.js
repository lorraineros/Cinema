import { StyleSheet } from 'react-native';
import { darkerBlue, stTropaz } from '../../styles/colors';

export default StyleSheet.create({
  cinemaContainer: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'start'
  },
  movieContainer: {
    flex: 1,
    padding: 25,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'start'
  },
  cinemaTitle: {
    padding: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: stTropaz
  },
  movieTitle: {
    padding: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  cinemaParagraph: {
    fontSize: 17,
    color: darkerBlue
  }
});
