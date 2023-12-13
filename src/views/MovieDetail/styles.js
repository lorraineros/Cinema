import { StyleSheet } from 'react-native';
import { darkerBlue, stTropaz } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    alignItems: 'start',
    justifyContent: 'start'
  },
  title: {
    maxWidth: 220,
    marginTop: 37,
    paddingLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: stTropaz,
    textAlign: 'center'
  },
  image: {
    width: '40%',
    height: 300,
    resizeMode: 'contain'
  },
  plot: {
    fontSize: 16,
    color: darkerBlue,
    textAlign: 'justify',
    marginBottom: 20
  },
  details: {
    fontSize: 16,
    paddingLeft: 15,
    color: darkerBlue,
    marginTop: 10
  },
  genreContainer: {
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'start',
    flexWrap: 'wrap'
  },
  genre: {
    fontSize: 14,
    fontWeight: '500',
    color: darkerBlue,
    marginRight: 10,
    marginTop: 10
  },
  showtimeItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  showtime: {
    fontSize: 16,
    color: darkerBlue
  },
  purchaseButton: {
    marginLeft: 5,
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  purchaseButtonText: {
    color: 'white',
    fontSize: 14
  },
  scheduleItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    padding: 5
  },
});
