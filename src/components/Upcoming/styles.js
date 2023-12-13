import { Dimensions, StyleSheet } from 'react-native';
import { darkerBlue, paleCornflowerBlue, stTropaz } from '../../styles/colors';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: winWidth - 100,
    padding: 10,
    margin: 3,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 5,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'start'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: stTropaz
  },
  paragraph: {
    fontSize: 15,
    color: darkerBlue
  },
  image: {
    width: 100,
    height: 150
  }
});
