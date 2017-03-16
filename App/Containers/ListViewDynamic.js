import React from 'react'
import { ScrollView, Text, Image, View, Alert } from 'react-native'
import { Images } from '../Themes'
import { Container, Content, Card, CardItem, Footer, FooterTab, Left, Right, Body, Thumbnail, Button, Icon, ListItem } from 'native-base'
import RoundedButton from '../Components/RoundedButton'
import VtListView from '../Components/VtListView'
import VtString from '../Components/VtString'
import VtDate from '../Components/VtDate'
import VtMail from '../Components/VtMail'
import VtEmail from '../Components/VtEmail'
import VtPassword from '../Components/VtPassword'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Styles from './Styles/LoginScreenStyle'
import styles from './Styles/PresentationScreenStyle'
import renderIf from '../Components/renderIf'

var api = {
      getRec() {
        var url = 'https://devsma.idefenc.com/api/records/Location/all'
        return fetch(url).then((res) => res.json());
      }

};

const onButtonPress = () => {
  Alert.alert('สมัครสมาชิกแล้ว');
};

export default class SingupScreen extends React.Component {

  constructor(props){
  super(props);
  this.state = {
  result: [],
  location_tks_locationname:'',
  location_tks_locationdetail:'',
    }
  }

  componentWillMount(){
  api.getRec().then((res) => {
      this.setState ({
          result:res.result,
      })
  });
  }

  render () {

    contents = this.state.result.map(function (item) {
        return (
            <View>

                {renderIf(item.locationno.length > 1,
                    <VtListView
                        location_tks_locationname= {item.location_tks_locationname}
                        location_tks_locationdetail= {item.location_tks_locationdetail}
                    />
                )}


            </View>
        );
     });

    return (

      <Image source={Images.naturebg2} style={styles.backgroundImage}>
        <ScrollView style={styles.container}>
  <View style={Styles.form}>
          <View style={styles.section2} >
          { /*<Text style={styles.sectionText} >
              {"\n\n\n"}
            </Text> */}
          </View>

          {contents}


</View>
        </ScrollView>
        </Image>

    )
  }
}
