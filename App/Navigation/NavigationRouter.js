import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import CustomNavBar from '../Navigation/CustomNavBar'
import Userstore from '../Components/User'
import RegisterStore from '../Components/Register'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import AllComponentsScreen from '../Containers/AllComponentsScreen'
import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
import LoginScreen from '../Containers/LoginScreen'
import ListviewExample from '../Containers/ListviewExample'
import ListviewGridExample from '../Containers/ListviewGridExample'
import ListviewSectionsExample from '../Containers/ListviewSectionsExample'
import ListviewSearchingExample from '../Containers/ListviewSearchingExample'
import MapviewExample from '../Containers/MapviewExample'
import APITestingScreen from '../Containers/APITestingScreen'
import ThemeScreen from '../Containers/ThemeScreen'
import DeviceInfoScreen from '../Containers/DeviceInfoScreen'
import DrawerContent from '../Containers/DrawerContent'
import SingupScreen from '../Containers/SingupScreen'
import ListViewDynamic from '../Containers/ListViewDynamic'


/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router userstore={Userstore} registerStore={RegisterStore}>
          <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
          <Scene initial key='login' component={LoginScreen} title='Login' hideNavBar={true}/>
          <Scene key='presentationScreen' component={PresentationScreen} type={'reset'} title='SMA' hideNavBar={false} renderLeftButton={NavItems.hamburgerButton}/>
          <Scene key='componentExamples' component={AllComponentsScreen} title='Components' />
          <Scene key='usageExamples' component={UsageExamplesScreen} title='Usage' rightTitle='Example' onRight={() => window.alert('Example Pressed')} />
          <Scene key='listview' component={ListviewExample} type={'reset'} title='รายชื่อสถานที่' renderLeftButton={NavItems.hamburgerButton} renderRightButton={NavItems.nearbyButton}/>
          <Scene key='listviewGridExample' component={ListviewGridExample} title='Listview Grid' />
          <Scene key='listviewSectionsExample' component={ListviewSectionsExample} title='Listview Sections' />
          <Scene key='listviewSearchingExample' component={ListviewSearchingExample} title='Listview Searching' navBar={CustomNavBar} />
          <Scene key='mapviewExample' component={MapviewExample} title='Mapview' />
          <Scene key='apiTesting' component={APITestingScreen} title='API Testing' />
          <Scene key='listviewDynamic' component={ListViewDynamic} title='ListViewDynamic' />
          <Scene key='theme' component={ThemeScreen} title='Theme' />
            {/*   <Scene initial key='presentationScreen' component={PresentationScreen} title='SMA' renderLeftButton={NavItems.hamburgerButton} />*/}
            {/* Custom navigation bar example */}
          <Scene key='deviceInfo' component={DeviceInfoScreen} title='Device Info' />


          <Scene key='signupScreen' component={SingupScreen} title='Sign Up' hideNavBar={false}/>


            </Scene>
          </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
