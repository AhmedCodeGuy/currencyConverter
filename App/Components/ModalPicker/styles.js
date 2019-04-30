import { StyleSheet, Platform } from 'react-native'
import { Colors, Fonts } from '~/Themes'

const IS_IOS = Platform.OS === 'ios'

export default StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  textContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: 45,
    borderRadius: 40,
    paddingHorizontal: 20,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1.5
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {},
  text: {
    top: IS_IOS ? 1 : 0,
    flex: 3,
    ...Fonts.style.buttonTextLight
  },
  textSecondary: {
    top: IS_IOS ? 1 : 0,
    flex: 1,
    ...Fonts.style.buttonTextPlaceholder
  },
  loading: {
    padding: 5
  },
  error: {
    fontSize: 13,
    textAlign: 'left',
    color: Colors.error,
    marginLeft: 30
  },
  title: {
    ...Fonts.style.sectionTitle
  }
})
