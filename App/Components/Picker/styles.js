import { StyleSheet, Platform } from 'react-native'
import { Colors, Fonts } from '~/Themes'

const IS_IOS = Platform.OS === 'ios'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  picker: {
    width: IS_IOS ? '75%' : '100%',
    backgroundColor: IS_IOS ? Colors.banner : Colors.snow,
    borderRadius: 30,
    marginBottom: 10
  },
  closeModal: {
    backgroundColor: Colors.banner,
    width: '50%',
    borderRadius: 30,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeModalText: {
    ...Fonts.style.buttonText,
    top: 4
  },
  pickerItem: {
    ...Fonts.style.buttonTextLight,
    color: Colors.snow
  }
})
