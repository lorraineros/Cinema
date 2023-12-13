import { Dimensions, StyleSheet } from 'react-native';
import { darkerBlue, stTropaz } from '../../styles/colors';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'start',
  },
  paragraph: {
    padding: 50,
    fontSize: 20,
    color: stTropaz,
  },
});
