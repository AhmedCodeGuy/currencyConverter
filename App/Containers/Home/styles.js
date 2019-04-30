import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '~/Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: 60,
    height: 180,
    width: Metrics.images.logo,
    resizeMode: 'cover'
  },
  centered: {
    alignItems: 'center'
  },
  picker: {
    color: Colors.snow
  },
  label: {
    color: Colors.snow,
    paddingBottom: 10
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30
  },
  submitTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    backgroundColor: Colors.banner
  },
  submitButtonText: {
    color: Colors.text
  },
  textInput: {
    backgroundColor: Colors.eggplant,
    color: Colors.snow,
    shadowRadius: 0,
    shadowOpacity: 0,
    width: '100%'
  },
  textInputContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  displayButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    width: '100%',
    backgroundColor: Colors.eggplant,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  displayButtonText: {
    color: Colors.text
  },
  fetching: {
    marginRight: 10
  }
})
