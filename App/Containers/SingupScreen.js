import React from 'react'
import { ScrollView, Text, Image, View, Alert } from 'react-native'
import { Images } from '../Themes'
import { Button } from 'native-base'
import RoundedButton from '../Components/RoundedButton'

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
      getreg() {
        var url = 'https://devsma.idefenc.com/api/field/reg'
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
  fields: [],
  label:'',
  mandatory:'',
  type:[]
    }
  }

  componentWillMount(){
  api.getreg().then((res) => {
      this.setState ({
          fields:res.fields,
      })
  });
  }

  render () {

    contents = this.state.fields.map(function (item) {
        return (
            <View>

                {renderIf(item.type.name == 'date',
                    <VtDate
                        name= {item.name}
                        label= {item.label}
                        mandatory= {item.mandatory}
                        editable= {item.editable}
                        default= {item.default}
                    />
                )}

                {renderIf(item.name == 'email',
                    <VtEmail
                        name= {item.name}
                        label= {item.label}
                        mandatory= {item.mandatory}
                        editable= {item.editable}
                        default= {item.default}
                    />
                )}

                {renderIf(item.type.name == 'string' && item.name != 'password' && item.name != 'contact_no',
                    <VtString
                        name= {item.name}
                        label= {item.label}
                        mandatory= {item.mandatory}
                        editable= {item.editable}
                        default= {item.default}
                    />
                )}


            </View>
        );
     });


     contents2 = this.state.fields.map(function (item) {
         return (
             <View>

                 {renderIf(item.name == 'password',
                     <VtPassword
                         name= {item.name}
                         label= {item.label}
                         mandatory= {item.mandatory}
                         editable= {item.editable}
                         default= {item.default}
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
          {contents2}


          <RoundedButton onPress={onButtonPress}>
                 Sign Up
               </RoundedButton>
</View>
        </ScrollView>
        </Image>

    )
  }
}
