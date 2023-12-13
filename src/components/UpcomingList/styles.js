import { Dimensions, StyleSheet } from 'react-native';
import { darkerBlue, stTropaz } from '../../styles/colors';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'start',
    padding: 10,
  },
  paragraph: {
    padding: 50,
    fontSize: 20,
    color: stTropaz,
  },
});
