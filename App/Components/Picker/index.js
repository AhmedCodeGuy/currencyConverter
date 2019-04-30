import React from 'react'
import { array, object, func } from 'prop-types'
import { View, Picker as RNPicker, Platform } from 'react-native'

import styles from './styles'

const IS_IOS = Platform.OS === 'ios'

export default class Picker extends React.Component {
  render () {
    const { onChange, closeModal, value, options } = this.props
    return (
      <View style={[styles.container, this.props.style]}>
        <RNPicker
          selectedValue={value}
          style={[styles.picker, this.props.pickerStyle]}
          onValueChange={value => {
            onChange(value)
            closeModal()
          }}
          mode={IS_IOS ? 'dialog' : 'dropdown'}
          itemStyle={styles.pickerItem}
        >
          {options.map((option, index) => (
            <RNPicker.Item label={option.country} value={option} key={index} />
          ))}
        </RNPicker>
      </View>
    )
  }

  static propTypes = {
    options: array,
    value: object,
    closeModal: func,
    onChange: func
  }

  static defaultProps = {
    options: [],
    value: {},
    closeModal: () => {},
    onChange: () => {}
  }
}
