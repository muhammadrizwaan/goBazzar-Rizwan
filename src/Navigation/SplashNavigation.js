import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen/SplashScreen'

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        headerShown={false}
        headerMode="none"
    >
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
    </Stack.Navigator>
)
