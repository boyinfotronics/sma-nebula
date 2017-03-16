// @flow

import React from 'react'
import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import { Container, Content, Card, CardItem, Footer, FooterTab, Left, Right, Body, Thumbnail, Button, Icon, ListItem } from 'native-base'
// import styles from './Styles/FullButtonStyle'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Styles from './Styles/VtStyle'
import Styles2 from '../Containers/Styles/LoginScreenStyle'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
// Example

const place = require('../Images/place.png');

ExamplesRegistry.add('Full Button', () =>
  <VtListView
    text='Hey there'
    placeholder='Username'
  />
)

type VtListViewProps = {
     location_tks_locationname: string,
     location_tks_locationdetail: string,
}

export default class VtListView extends React.Component {
  props: VtListViewProps

  render () {
    return (
      <Content>
          <Card >
              <CardItem>
                  <Left>
                      <Thumbnail source={place} />
                      <Body>
                          <Text>{this.props.location_tks_locationname}</Text>
                          <Text note>Infotronics</Text>
                      </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image style={{width: 380, height: 220}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
                </CardItem>
                <CardItem content>
                    <Text>{this.props.location_tks_locationdetail}</Text>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent onPress={NavigationActions.mapviewExample}>
                            <Icon active name="thumbs-up" />
                            <Text>12 Likes</Text>
                        </Button>
                    </Left>
                  <Body>
                      <Button transparent>
                          <Icon active name="chatbubbles" />
                          <Text>4 Comments</Text>
                      </Button>
                  </Body>
               {  /*  <Right>
                       <Text> xx ago</Text>
                  </Right> */ }
                  <Right>
                      <Button style={{backgroundColor: '#384850'}} onPress={NavigationActions.mapviewExample}>
                      <Text  style={{color: '#00c497'}}> Map </Text>
                      </Button>
                  </Right>
              </CardItem>
         </Card>
      </Content>
    )
  }
}
