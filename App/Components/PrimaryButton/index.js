import React, { Component } from 'react'
import { array, func, bool, any } from 'prop-types'

import { View, TouchableOpacity } from 'react-native'

import styles from './styles'

class PrimaryButton extends Component {
  render () {
    const {
      style,
      textContainerStyle,
      disabled,
      onPress,
      children
    } = this.props
    const disabledStyle = disabled ? { ...styles.disabled } : {}

    return (
      <TouchableOpacity
        {...this.props}
        style={[styles.button, style]}
        onPress={onPress}
      >
        <View style={[styles.textContainer, textContainerStyle, disabledStyle]}>
          {children}
        </View>
      </TouchableOpacity>
    )
  }
}

PrimaryButton.propTypes = {
  style: array,
  textContainerStyle: array,
  disabled: bool,
  onPress: func,
  children: any
}

PrimaryButton.defaultProps = {
  buttonStyle: [],
  textContainerStyle: [],
  disabled: false,
  onPress: () => {},
  children: null
}

export default PrimaryButton
