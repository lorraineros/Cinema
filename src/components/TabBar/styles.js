import { StyleSheet, Dimensions } from 'react-native'
import { darkerBlue, stTropaz } from '../../styles/colors'

const { width: winWidth } = Dimensions.get('window')

export default StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: winWidth,
    height: 40,
    backgroundColor: darkerBlue
  },
  taskTabBar: {
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 240,
    height: 40,
    backgroundColor: stTropaz
  },
  button: {
    flex: 1,
    alignItems: 'center',
    padding: 5
  },
  paragraph: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16
  }
})
