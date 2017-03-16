import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import {Container, Footer, FooterTab, Button, Icon } from 'native-base'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/PresentationScreenStyle'

export default class PresentationScreen extends React.Component {
  render () {

const User = this.props.userstore.username ? this.props.userstore.username :''

    return (
      <Container>
      <View style={styles.mainContainer}>
        <Image source={Images.naturebg2} style={styles.backgroundImage} />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.sma} />
          </View>

          <View style={styles.section} >
            <Text style={styles.sectionText} >
              Smart Mobile Application  {"\n"} สวัสดีคุณ : {User}
            </Text>
          </View>



          <RoundedButton onPress={NavigationActions.login}>
            Sign out
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.listviewDynamic}>
            List View
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.mapviewExample}>
            Map View
          </RoundedButton>





{/*
        <RoundedButton onPress={NavigationActions.usageExamples}>
          Usage Examples Screen
        </RoundedButton>
          <RoundedButton onPress={NavigationActions.usageExamples}>
            Usage Examples Screen
          </RoundedButton>
          <RoundedButton onPress={NavigationActions.apiTesting}>
            API Testing Screen
          </RoundedButton>
          <RoundedButton onPress={NavigationActions.theme}>
            Theme Screen
          </RoundedButton>
          <RoundedButton onPress={NavigationActions.deviceInfo}>
            Device Info Screen
          </RoundedButton>
          <View style={styles.centered}>
            <Text style={styles.subtitle}>Made with ❤️ by Infinite Red</Text>
          </View> */}

        </ScrollView>
      </View>
      </Container>
    );
  }
}
