// @flow

import React from 'react'
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'
// import styles from './Styles/FullButtonStyle'
import ExamplesRegistry from '../Services/ExamplesRegistry'

import Styles from './Styles/VtStyle'
import Styles2 from '../Containers/Styles/LoginScreenStyle'
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
  <VtEmail
    text='Hey there'
    placeholder='Username'
  />
)

type VtEmailProps = {
     name: string,
     label: string,
     mandatory: boolean,
     editable: boolean,
     default: string
}

export default class VtEmail extends React.Component {
  props: VtEmailProps
  state: {
    email: string,
  }

constructor (props: VtEmailProps)
{
  super(props)
  this.state = {
    email: '',
  }
  this.EmailCheck = this.EmailCheck.bind(this)
}

validateEmail = (emails) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emails);
};

EmailCheck() {

if (this.validateEmail(this.state.email)) {
  Alert.alert('E-mail Can Use!');
} else {
  Alert.alert('Invalid E-mail !');
}

}


  render () {
    return (
      <View style={Styles2.inputWrap}>

       <TextInput
         keyboardType="email-address"
         label={this.props.label}
         placeholder={this.props.label}
         placeholderTextColor="#B40402"
         style={Styles2.input}
         underlineColorAndroid='transparent'
         onChangeText={(text) => this.setState({ email: text })}
         onEndEditing={this.EmailCheck}
       />



            {/* <Text style={Styles.rowLabel}>{I18n.t(this.props.name)}</Text> */}

          </View>

    )
  }
}
