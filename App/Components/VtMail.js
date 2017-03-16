// @flow

import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
// import styles from './Styles/FullButtonStyle'
import ExamplesRegistry from '../Services/ExamplesRegistry'

import Styles from './Styles/VtStyle'
import {
  Kaede,
  Hoshi,
  Jiro,
  Isao,
  Madoka,
  Akira,
  Hideo,
  Kohana,
  Makiko,
  Sae,
  Fumi,
} from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
// Example
ExamplesRegistry.add('Full Button', () =>
  <VtMail
    text='Hey there'
    placeholder='Username'
  />
)

type VtMailProps = {
     name: string,
     label: string,
     mandatory: boolean,
     editable: boolean,
     default: string
}

export default class VtMail extends React.Component {
  props: VtMailProps

  render () {
    return (
          <View style={Styles.row}>

          <Fumi
             label={this.props.label}
             iconClass={FontAwesomeIcon}
             iconName={'angle-right'}
             iconColor={'#B40404'}
             textColor={'#000000'}
           />


            {/* <Text style={Styles.rowLabel}>{I18n.t(this.props.name)}</Text> */}

          </View>
    )
  }
}
