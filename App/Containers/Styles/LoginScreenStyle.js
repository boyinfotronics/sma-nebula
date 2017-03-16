// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingTop: 10
  },
  form: {
    backgroundColor: Colors.transparent2,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 11
  },
  row: {
    paddingVertical: 13,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  rowLabel: {
    color: Colors.snow
  },
  textInput: {
    height: 36,
    color: Colors.snow,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1
  },
  textInputReadonly: {
    height: 36,
    color: Colors.Red
  },
  loginRow: {
    paddingBottom: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: 'row'
  },
  loginButtonWrapper: {
    flex: 1
  },
  loginButton: {
    height: 42,
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: Metrics.section,
    marginVertical: 7,
    backgroundColor: Colors.transparent,
    borderColor: '#87CEFA',
    justifyContent: 'center'

  },
  loginText: {
    textAlign: 'center',
    color: Colors.silver
  },
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    marginLeft: 15,
    marginRight: 15,
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: "#FFFFFF"
  },
  iconWrap: {
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 25,
    width: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 1,
    paddingHorizontal: 3,
    color: Colors.snow,
  },
  input2: {
    flex: 1,
    paddingVertical: 18,
    paddingHorizontal: 3,
    color: Colors.snow,
    marginLeft: 10,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  }

})
