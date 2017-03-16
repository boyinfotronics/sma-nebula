import React from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation,
  StyleSheet,
  Alert
} from 'react-native'
import { connect } from 'react-redux'
import {FBLogin, FBLoginManager} from 'react-native-facebook-login'
import Styles from './Styles/LoginScreenStyle'
import {Images, Metrics, Colors} from '../Themes'
import LoginActions from '../Redux/LoginRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import I18n from 'react-native-i18n'
import { Container, Content, Button ,Icon} from 'native-base';
import styles from './Styles/PresentationScreenStyle'
import RoundedButton from '../Components/RoundedButton'
import { ActionsX } from 'react-native-mobx'
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
import Ionicon from 'react-native-vector-icons/Ionicons';

type LoginScreenProps = {
  dispatch: () => any,
  fetching: boolean,
  attemptLogin: () => void
}

const lockIcon = require('../Images/login1_lock.png');
const personIcon = require('../Images/login1_person.png');

class LoginScreen extends React.Component {

  props: LoginScreenProps

  state: {
    username: string,
    password: string,
    visibleHeight: number,
    topLogo: {
      width: number
    }
  }

  isAttempting: boolean
  keyboardDidShowListener: Object
  keyboardDidHideListener: Object

  constructor (props: LoginScreenProps) {
    super(props)
    this.state = {
      username: '',
      password: '',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth }
    }
    this.LoginCheck = this.LoginCheck.bind(this)
    this.isAttempting = false

  }

  LoginCheck(){
    this.props.userstore.SetData(this.state.username,this.state.password)
        if(((this.state.username.length>0) && (this.state.username.indexOf(" ") < 0)) && (this.state.password.length>0)){
      NavigationActions.presentationScreen()
    }if ((this.state.username.length==0) || (this.state.username.indexOf(" ") >= 0)){
      Alert.alert('โปรดระบุ Username');
    }if ((this.state.password.length==0) && ((this.state.username.length>0) || (this.state.username.indexOf(" ") >= 0))){
      Alert.alert('โปรดระบุ Password');
    }
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    // Did the login attempt complete?
    if (this.isAttempting && !newProps.fetching) {
      NavigationActions.pop()

    }
  }

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: {width: 100, height: 70}
    })
  }

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
      topLogo: {width: Metrics.screenWidth}
    })
  }

  handlePressLogin = () => {
    const { username, password } = this.state
    this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    this.props.attemptLogin(username, password)
  }

  handleChangeUsername = (text) => {
    this.setState({ username: text })
  }

  handleChangePassword = (text) => {
    this.setState({ password: text })
  }


  render () {
    const x=1;
    const { username, password } = this.state
    const { fetching } = this.props
    const editable = !fetching
    const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly
    return (

        <Image source={Images.naturebg2} style={styles.backgroundImage}>
        <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[Styles.container, {height: this.state.visibleHeight}]} keyboardShouldPersistTaps>
        <Image source={Images.sma} style={[Styles.topLogo, this.state.topLogo]} />
        <Text>{"\n"}</Text>


        <View style={Styles.form}>
        <View style={Styles.inputWrap}>
             <View style={Styles.iconWrap}>
               <Image source={personIcon} style={Styles.icon} resizeMode="contain" />
             </View>
             <TextInput
               placeholder="Username"
               placeholderTextColor="#FFFFFF"
               style={Styles.input}
               underlineColorAndroid='transparent'
               onChangeText={(text) => this.setState({ username: text })}
             />
           </View>
           <View style={Styles.inputWrap}>
                <View style={Styles.iconWrap}>
                  <Image source={lockIcon} style={Styles.icon} resizeMode="contain" />
                </View>
                <TextInput
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor="#FFFFFF"
                  style={Styles.input}
                  underlineColorAndroid='transparent'
                  onChangeText={(text) => this.setState({ password: text })}
                />
              </View>


<Text>{"\n"}</Text>
            <TouchableOpacity style={Styles.loginButtonWrapper} onPress={this.LoginCheck}>
              <View style={Styles.loginButton}>
                <Text style={Styles.loginText}>{I18n.t('signIn')}</Text>
              </View>
            </TouchableOpacity>



            <TouchableOpacity style={Styles.loginButtonWrapper} onPress={NavigationActions.signupScreen}>
              <View style={Styles.loginButton}>
                <Text style={Styles.loginText}>{I18n.t('signUp')}</Text>
              </View>
            </TouchableOpacity>
            <Text>{"\n"}</Text>
          </View>



    { /*<RoundedButton onPress={NavigationActions.presentationScreen}>
           Sign In
         </RoundedButton> */
       }


      <FBLogin iconLeft block
       style={{ marginTop: 9 }}
       ref={(fbLogin) => { this.fbLogin = fbLogin }}
       permissions={["email","user_friends"]}
       loginBehavior={FBLoginManager.LoginBehaviors.Native}
       onLogin={function(data){
        //  NavigationActions.presentationScreen();
         console.log("Logged in!");
         console.log(data);
       }}
       onLogout={function(){
         console.log("Logged out.");
       }}
       onLoginFound={function(data){
        //  NavigationActions.presentationScreen();
         console.log("Existing login found.");
         console.log(data);

       }}
       onLoginNotFound={function(){
         console.log("No user logged in.");

       }}
       onError={function(data){
         console.log("ERROR");
         console.log(data);
       }}
       onCancel={function(){
         console.log("User cancelled.");
       }}
       onPermissionsMissing={function(data){
         console.log("Check permissions!");
         console.log(data);
       }}
       />


                  <Content>
  {/*}                  <Button iconLeft block
                    style={{ marginTop: 9 }}
                    onPress={() => window.alert('Sign in with Facebook Button Pressed!')} >
                      <Icon name='logo-facebook' />
                      <Text style={Styles.loginText}>Sign in with Facebook</Text>
                    </Button> */}

                    <Button iconLeft block danger
                    style={{ marginTop: 7 }}
                    onPress={() => window.alert('Sign in with Google Button Pressed!!')} >
                      <Icon name='logo-google' />
                      <Text style={Styles.loginText}>Sign in with Google</Text>
                    </Button>
                  </Content>



      </ScrollView>
      </Image>


    )
  }

}

const mapStateToProps = (state) => {
  return {
    fetching: state.login.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
