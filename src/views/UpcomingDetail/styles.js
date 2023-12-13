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
    width: 100,
    height: 150
  },
  trailerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: stTropaz
  },
  webview: {
    width: 300,
    maxHeight: 200,
  }
});
