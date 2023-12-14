import { StyleSheet } from 'react-native';
import { darkerBlue, stTropaz } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paragraph: {
    fontSize: 15,
    color: darkerBlue,
  },
  input: {
    width: 300,
    height: 40,
    borderRadius: 10,
    borderColor: darkerBlue,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  submitButton: {
    backgroundColor: darkerBlue,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    width: 70
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 13,
    color: 'white'
  }
});
