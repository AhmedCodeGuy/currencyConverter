import { Colors } from '~/Themes'
export default {
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
  disabled: {
    shadowRadius: 0,
    shadowOpacity: 0
  }
}
