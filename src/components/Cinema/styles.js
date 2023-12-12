import { Dimensions, StyleSheet } from 'react-native';
import { darkerBlue, paleCornflowerBlue, stTropaz } from '../../styles/colors';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: winWidth - 100,
    padding: 10,
    margin: 2,
    borderRadius: 5,
    borderColor: paleCornflowerBlue,
    borderWidth: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start'
  },
  title: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: stTropaz
  },
  paragraph: {
    paddingLeft: 20,
    fontSize: 15,
    color: darkerBlue
  }
});
