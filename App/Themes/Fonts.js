const type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic'
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 10
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  },
  buttonText: {
    fontFamily: type.bold,
    fontSize: size.input,
    color: '#ffffff',
    letterSpacing: 0
  },
  buttonTextLight: {
    fontFamily: type.base,
    fontSize: size.input,
    color: 'rgba(65, 64, 66, 1)',
    letterSpacing: 0
  },
  buttonTextPlaceholder: {
    fontFamily: type.bold,
    fontSize: size.medium,
    color: 'rgba(65, 64, 66, 0.5)',
    letterSpacing: 0
  },
  buttonTitle: {
    fontFamily: type.bold,
    fontSize: size.small,
    color: '#ffffff',
    letterSpacing: 0
  },
  sectionTitle: {
    fontFamily: type.base,
    fontSize: size.regular,
    color: 'rgba(65, 64, 66, 1)',
    letterSpacing: 0
  },
  helperText: {
    fontFamily: type.bold,
    fontSize: size.small
  },
  helperText2: {
    fontFamily: type.base,
    fontSize: size.small,
    color: 'rgba(65, 64, 66, 1)'
  },
  cardTitle: {
    fontFamily: type.bold,
    fontSize: size.medium,
    color: 'rgba(65, 64, 66, 1)'
  },
  cardsubTitle: {
    fontFamily: type.base,
    fontSize: size.tiny
  },
  cardDetails: {
    fontFamily: type.base,
    fontSize: size.tiny,
    color: 'rgba(65, 64, 66, 1)'
  },
  cardName: {
    fontFamily: type.base,
    fontSize: size.medium,
    color: 'rgba(65, 64, 66, 1)'
  },
  checkboxButton: {
    fontFamily: type.base,
    fontSize: size.medium,
    color: 'rgba(65, 64, 66, 1)'
  },
  checkboxButtonActive: {
    fontFamily: type.bold,
    fontSize: size.medium,
    color: '#FFF'
  },
  clickableText: {
    fontFamily: type.base,
    fontSize: size.small
  }
}

export default {
  type,
  size,
  style
}
