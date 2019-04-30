import React from 'react'
import { array, string, bool, object } from 'prop-types'
import { View, Text, Modal, Platform } from 'react-native'

import Picker from '../Picker'
import PrimaryButton from '../PrimaryButton'

import styles from './styles'

const IS_IOS = Platform.OS === 'ios'

export default class ModalPicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }

  showModal = visible => {
    this.setState({ modalVisible: visible })
  }

  onPress = () => {
    if (IS_IOS) {
      this.showModal(true)
    }
  }

  onChange = value => {
    this.props.onChange(value)
  }

  renderPicker = () => {
    const { buttonStyle, options, disabled, value } = this.props

    if (IS_IOS) {
      return (
        <View>
          {/* Modal Picker Button IOS */}
          <PrimaryButton
            disabled={disabled}
            style={[styles.button, buttonStyle]}
            onPress={this.onPress}
          >
            <Text style={styles.textSecondary}>{value.currency}</Text>
            <Text style={styles.text}>{value.country}</Text>
          </PrimaryButton>

          {/* Modal IOS */}
          <Modal
            animationType='fade'
            transparent
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.showModal(false)
            }}
            presentationStyle='overFullScreen'
            style={{
              marginTop: 22
            }}
          >
            <Picker
              onChange={this.onChange}
              value={value}
              options={options}
              closeModal={() => this.showModal(false)}
            />
          </Modal>
        </View>
      )
    } else {
      // Android Picker
      return <Picker onChange={this.onChange} value={value} options={options} />
    }
  }

  render () {
    const { label, labelStyle, value } = this.props

    return (
      <View style={styles.container}>
        <Text style={[styles.title, labelStyle]}>
          {IS_IOS ? label : value.currency}
        </Text>

        {this.renderPicker()}
        <View />
      </View>
    )
  }

  static propTypes = {
    value: object,
    buttonStyle: array,
    options: array,
    disabled: bool,
    label: string
  }
  static defaultProps = {
    value: {},
    buttonStyle: [],
    options: [],
    disabled: false,
    label: ''
  }
}
