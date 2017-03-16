// @flow

import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
// import styles from './Styles/FullButtonStyle'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import DatePicker from 'react-native-datepicker'
import Styles from './Styles/VtStyle'

// Example
ExamplesRegistry.add('Full Button', () =>
  <VtDate
    text='Hey there'
    placeholder='Username'
  />
)

type VtDateProps = {
     name: string,
     label: string,
     mandatory: boolean,
     editable: boolean,
     default: string
}

export default class VtDate extends React.Component {
  props: VtDateProps
  state = {date:"01-01-2000"}

  render () {
    return (
          <View style={Styles.row}>
            {/* <Text style={Styles.rowLabel}>{I18n.t(this.props.name)}</Text> */}
            <Text style={Styles.rowLabel}>{this.props.label}</Text>

            <DatePicker
         style={{width: 200}}
         date={this.state.date}
         mode="date"
         placeholder="select date"
         format="DD-MM-YYYY"
         minDate="01-01-1960"
         maxDate="01-12-2016"
         confirmBtnText="Confirm"
         cancelBtnText="Cancel"
         customStyles={{

           dateIcon: {
             position: 'absolute',
             left: 0,
             top: 4,
             marginLeft: 0
           },
           dateInput: {
             marginLeft: 36,
             backgroundColor:'#fffddb'
           }
           // ... You can check the source to find the other keys.
         }}
         onDateChange={(date) => {this.setState({date: date})}}
       />


          </View>
    )
  }
}
