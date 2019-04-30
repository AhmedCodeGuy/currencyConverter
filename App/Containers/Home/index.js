import React, { Component } from 'react'
import { ScrollView, Image, View, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import moment from 'moment'

import { Images } from '~/Themes'
import { currencies, base } from '~/Services/StaticLookups'
import RatesActions from '~/Redux/RatesRedux'

import ModalPicker from '~/Components/ModalPicker'
import TextInput from '~/Components/TextInput'
import PrimaryButton from '~/Components/PrimaryButton'

import styles from './styles'

const TIME = moment().format('YYYY-MM-DD')

class Home extends Component {
  state = {
    amount: 1,
    currency: currencies[0]
  }

  componentDidMount () {
    this.props.fetch(TIME)
  }
  onSubmit = () => {
    this.props.fetch(TIME)
  }

  render () {
    const { currency, amount } = this.state
    const { fetching, data } = this.props
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode='stretch'
        />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.logoTransparent} style={styles.logo} />
          </View>

          {/* BASE CURRENCY SECTION */}
          <View style={styles.section}>
            <ModalPicker
              labelStyle={styles.label}
              value={base[0]}
              options={base}
              disabled
            />

            <PrimaryButton textContainerStyle={[styles.displayButton]}>
              <Text style={styles.displayButtonText}>{amount}</Text>
            </PrimaryButton>
            {/* <TextInput
              containerStyle={[styles.textInputContainer]}
              style={[styles.textInput]}
              placeholder='Please Enter Amount'
              onChange={amount => this.setState({ amount })}
            /> */}
          </View>

          {/* CONVERTED CURRENCY SECTION  */}
          <View style={styles.section}>
            <ModalPicker
              labelStyle={styles.label}
              value={currency}
              options={currencies}
              onChange={currency => this.setState({ currency })}
            />

            <PrimaryButton textContainerStyle={[styles.displayButton]}>
              {fetching && (
                <ActivityIndicator style={styles.fetching} size='small' />
              )}
              <Text style={styles.displayButtonText}>
                {!fetching &&
                  data &&
                  data.rates &&
                  data.rates[currency.currency]}
              </Text>
            </PrimaryButton>
          </View>

          <View style={styles.section}>
            <PrimaryButton
              style={[styles.submitButton]}
              textContainerStyle={[styles.submitTextContainer]}
              onPress={this.onSubmit}
            >
              {fetching && (
                <ActivityIndicator style={styles.fetching} size='small' />
              )}
              <Text style={styles.submitButtonText}>CONVERT 💰</Text>
            </PrimaryButton>
          </View>
        </ScrollView>
      </View>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    data: state.rates.rates,
    fetching: state.rates.fetching
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetch: data => {
      dispatch(RatesActions.ratesRequest(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
