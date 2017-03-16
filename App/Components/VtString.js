// @flow

import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
// import styles from './Styles/FullButtonStyle'
import ExamplesRegistry from '../Services/ExamplesRegistry'

import Styles from './Styles/VtStyle'
import Styles2 from '../Containers/Styles/LoginScreenStyle'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
// Example
ExamplesRegistry.add('Full Button', () =>
  <VtString
    text='Hey there'
    placeholder='Username'
  />
)

type VtStringProps = {
     name: string,
     label: string,
     mandatory: boolean,
     editable: boolean,
     default: string
}

export default class VtString extends React.Component {
  props: VtStringProps

  render () {
    return (
          <View style={Styles2.inputWrap}>

           <TextInput
             label={this.props.label}
             placeholder={this.props.label}
             placeholderTextColor="#FFFFFF"
             style={Styles2.input}
             underlineColorAndroid='transparent'
           />

            {/* <Text style={Styles.rowLabel}>{I18n.t(this.props.name)}</Text> */}

          </View>
    )
  }
}
