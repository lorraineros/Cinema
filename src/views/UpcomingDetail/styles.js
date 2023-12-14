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
    paddingTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: stTropaz
  },
  paragraph: {
    fontSize: 17,
    color: darkerBlue,
    padding: 20
  },
  image: {
    width: 150,
    height: 200
  },
  trailerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: stTropaz
  },
  webview: {
    width: 300,
    maxHeight: 200,
  },
  trailerContainer: {
    paddingBottom: 200
  }
});
