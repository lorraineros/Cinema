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
  title: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: stTropaz,
    textAlign: 'center'
  },
  image: {
    width: '100%', // Adjust as needed
    height: 300, // Adjust as needed
    resizeMode: 'contain',
    marginBottom: 20
  },
  plot: {
    fontSize: 16,
    color: darkerBlue,
    textAlign: 'justify',
    marginBottom: 20
  },
  details: {
    fontSize: 16,
    color: darkerBlue,
    marginBottom: 10
  },
  genreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 20
  },
  genre: {
    fontSize: 14,
    color: darkerBlue,
    marginRight: 10,
    marginBottom: 10
  },
  showtimeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  showtime: {
    fontSize: 16,
    color: darkerBlue
  },
  purchaseButton: {
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
});
