import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
  AppRegistry
} from 'react-native';

import FitImage from 'react-native-fit-image';
import { Container, Content, Card, CardItem, Footer, FooterTab, Left, Right, Body, Thumbnail, Button, Icon, ListItem } from 'native-base'
import GiftedListView from 'react-native-gifted-listview';
import API from '../Components/api';
export default class ListViewDynamic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieCount: 0
    };
    this.onFetch = this.onFetch.bind(this);
  }

  onFetch(page = 1, callback, options) {
    let rowArray = [];
    Promise.resolve(API.getAllMovies(page))
    .then((response) => {
      this.setState({
        movieCount:30
      });
      response.result.map((object) => {
        rowArray.push(object);
      });
    }).then(() => {
      if (page === Math.round(this.state.movieCount / 20)) {
        callback(rowArray, {
          allLoaded: true,
        });
      } else {
        callback(rowArray);
      }
    });
    setTimeout(() => {
    }, 1000);
  }

  renderMoviesRow(rowData) {
    return (

      <Content>
          <Card >
              <CardItem>
                  <Left>
                      <Thumbnail source={{ uri: rowData.cf_774 }} />
                      <Body>
                          <Text>{rowData.location_tks_locationname}</Text>
                          <Text>{rowData.cf_772}</Text>
                      </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>

                <FitImage
                  resizeMode="contain"
                  source={{ uri: rowData.cf_774 }}
                    />

                </CardItem>
                <CardItem content>
                    <Text>{rowData.location_tks_locationdetail}</Text>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
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
                      <Button style={{backgroundColor: '#384850'}}>
                      <Text  style={{color: '#00c497'}}> Map </Text>
                      </Button>
                  </Right>
              </CardItem>
         </Card>
      </Content>
    );
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.card} >
            <GiftedListView
              rowView={this.renderMoviesRow}
              onFetch={this.onFetch}
              firstLoader={true} // display a loader for the first fetching
              pagination={false} // enable infinite scrolling using touch to load more
              refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
              withSections={false} // enable sections
              customStyles={{
                paginationView: {
                  backgroundColor: '#eee',
                },
              }}

              refreshableTintColor="blue"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  tabView: {
    flex: 1,
    marginTop: 50,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  thumbLeft: {
    width: 60,
    height: 80,
    backgroundColor: 'white',
    marginRight: 10,
  },
  thumbText: {
    fontSize: 20,
    padding: 20,
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#d8d8d8'
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold'
  },
  label: {
    color: 'black'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 4,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  }
});
