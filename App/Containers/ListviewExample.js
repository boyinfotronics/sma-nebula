// @flow

import React from 'react'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { View, Text, ListView, Image } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import { Container, Content, Card, CardItem, Footer, FooterTab, Left, Right, Body, Thumbnail, Button, Icon, ListItem } from 'native-base'

// For empty lists
import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/ListviewExampleStyle'


class ListviewExample extends React.Component {
  state: {
    dataSource: Object
  }

  constructor (props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = [
      {title: 'Location A', imgsrc: require('../Images/lo1.jpg'),description: 'Travel is a learning experience. Seeing other parts of the world and immersing yourself in foreign cultures opens up completely new avenues of discovery \n หลายๆคนคงอยากไปเที่ยวทุกที่ในประเทศไทย แต่ก็คงติดปัญหาของเรื่องค่าใช้จ่าย หรืองบประมาณ'},
      {title: 'Location B', imgsrc: require('../Images/lo2.jpg'),description: 'เมื่อคุณกำลังจะออกเดินทางคุณควรดูรายละเอียดเพื่อป้องกันปัญหาและเพลิดเพลินกับการเดินทางของคุณ เหมือนภาษิตที่ว่า “ทุกบาททุกสตางค์มีค่า” เวลาเลือกทัวร์แพ็คเก็จไม่เพียงแต่ต้องคำนึงถึงราคาเท่านั้น ควรจะพิจารณาความน่าเชื่อถือและคุณภาพของบริการของบริษัทนำเที่ยวด้วยเช่นกัน'},
      {title: 'Location C', imgsrc: require('../Images/lo3.jpg'),description: 'เมื่อคุณกำลังจะออกเดินทางคุณควรดูรายละเอียดเพื่อป้องกันปัญหาและเพลิดเพลินกับการเดินทางของคุณ เหมือนภาษิตที่ว่า “ทุกบาททุกสตางค์มีค่า” เวลาเลือกทัวร์แพ็คเก็จไม่เพียงแต่ต้องคำนึงถึงราคาเท่านั้น ควรจะพิจารณาความน่าเชื่อถือและคุณภาพของบริการของบริษัทนำเที่ยวด้วยเช่นกัน'},
      {title: 'Location D', imgsrc: require('../Images/lo4.jpg'),description: 'D Description'},
      {title: 'Location E', imgsrc: require('../Images/lo5.jpg'),description: 'E Description'},
      {title: 'Location F', imgsrc: require('../Images/lo6.jpg'),description: 'F Description'},
      {title: 'Location G', imgsrc: require('../Images/lo7.jpg'),description: 'G Description'},

    ]

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    }
  }

  /* ***********************************************************
  * STEP 3
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  renderRow (rowData) {
    return (

      // <Container>
      //                <Content>
      //                    <ListItem thumbnail>
      //                        <Left>
      //                            <Thumbnail square size={150} source={Images.logo} />
      //                        </Left>
      //                        <Body>
      //                            <Text>Sankhadeep</Text>
      //                            <Text note>Its time to build a difference . .</Text>
      //                        </Body>
      //                        <Right>
      //                            <Button transparent>
      //                                <Text>View</Text>
      //                            </Button>
      //                        </Right>
      //                    </ListItem>
      //                </Content>
      //            </Container>

                 <Content>
                     <Card >
                         <CardItem>
                             <Left>
                                 <Thumbnail source={rowData.imgsrc} />
                                 <Body>
                                     <Text>{rowData.title}</Text>
                                     <Text note>Infotronics</Text>
                                 </Body>
                             </Left>
                           </CardItem>
                           <CardItem cardBody>
                               <Image style={{width: 380, height: 220}} source={rowData.imgsrc}/>
                           </CardItem>
                           <CardItem content>
                               <Text>{rowData.description}</Text>
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


      // <View style={styles.row}>
      //
      //   <Text style={styles.boldLabel}>{rowData.description}</Text>
      //   <Image source={rowData.imgsrc} />
      //   <Text style={styles.label}>{rowData.description}</Text>
      // </View>

    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this.noRowData()} />
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          pageSize={15}
        />

        <Footer>
          <FooterTab>
            <Button onPress={NavigationActions.listviewSearchingExample}>
              <Icon name="search" />
              <Text>Search</Text>
            </Button>
            <Button active onPress={NavigationActions.listviewExample}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button>
              <Icon name="person" />
              <Text>My Trip</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

export default connect(mapStateToProps)(ListviewExample)
