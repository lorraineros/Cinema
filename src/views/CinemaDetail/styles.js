import { StyleSheet } from 'react-native';
import { darkerBlue, stTropaz } from '../../styles/colors';

export default StyleSheet.create({
  cinemaContainer: {
    padding: 20,
    borderColor: 'dimgray',
    borderWidth: 7,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'start'
  },
  movieContainer: {
    padding: 20,
    borderColor: 'darkgray',
    borderWidth: 7,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'start'
  },
  cinemaTitle: {
    padding: 15,
    fontSize: 24,
    fontWeight: 'bold',
    color: stTropaz
  },
  movieTitle: {
    padding: 15,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  cinemaParagraph: {
    fontSize: 17,
    color: darkerBlue,
    paddingBottom: 10
  }
});
