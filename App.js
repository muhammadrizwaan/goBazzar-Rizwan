import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from "react-redux"

import HomeStack from './src/Navigation/HomeNavigation'
import HomeStackWithNavigation from "./src/Navigation/StackNavigation"
import SplashStack from './src/Navigation/SplashNavigation'
import FilterDrawer from "./src/Navigation/FilterDrawer"

import configureStore from "./src/store/configureStore"
import { fetchHomeProducts } from "./src/actions/homeProductActions"
import { fetchProductsCatalogs } from "./src/actions/productActions"
import { fetchNSetUser } from "./src/actions/authActions"

import FlashMessage from "react-native-flash-message";


const Drawer = createDrawerNavigator()

const store = configureStore()

class App extends React.Component {
  state = {
    loading: true
  }
  componentDidMount() {
    
    store.dispatch(fetchNSetUser())
    store.dispatch(fetchProductsCatalogs())
    store.dispatch(fetchHomeProducts())


    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000)
  }
  render() {
    const { loading } = this.state
    return (
      <Provider store={store}>
        <NavigationContainer
        >
          {loading ? <SplashStack /> :
            <Drawer.Navigator
              initialRouteName="Home"
              drawerPosition={"right"}
              drawerContent={(props) => <FilterDrawer {...props} />}
              // gestureEnabled={false}
              // options={{
              //   swipeEnabled: false,
              //   gestureEnabled: false,
              //   drawerLockMode: "locked-open"
              // }}

              // DrawerNavigationOptions={{
              //   gestureEnabled: false
              // }}
              drawerLockMode="locked-closed"


              options={{
                drawerLockMode: "locked-closed"
              }}

              navigationOptions={({ navigation }) => ({ drawerLockMode: 'locked-closed' })}

            // options={() => {
            //   return {
            //     swipeEnabled: false,
            //     drawerLockMode: "locked-open",
            //     gestureEnabled: false,
            //   }
            // }}

            // navigationOptions={{
            //   gestureEnabled: false,
            //   swipeEnabled: false
            // }}

            >
              <Drawer.Screen
                name="Home"
                component={HomeStackWithNavigation}
                navigationOptions={({ navigation }) => ({
                  drawerLockMode: 'locked-closed',
                  disableGestures: true
                })}
                options={{
                  swipeEnabled: false,
                  gestureEnabled: false
                }}
              />
            </Drawer.Navigator>
          }
        </NavigationContainer>
        <FlashMessage position="top" />
      </Provider>
    )
  }
}

export default App;