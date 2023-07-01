import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './Src/Screens/Login'
import SignUp from './Src/Screens/SignUp'
import Otp from './Src/Screens/Otp'
import Home from './Src/Screens/Home'
import Room from './Src/Screens/Room'
import BottomBar from './Src/Components/BottomBar'
import JoinTeam from './Src/Screens/JoinTeam'
import MakeTeam from './Src/Screens/MakeTeam'
import ScoreBoarding from './Src/Screens/ScoreBoarding'
import SelectSpecificationOfCricket from './Src/Screens/SelectSpecificationOfCricket'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {

  const Stack = createNativeStackNavigator();

 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignUp'>
        <Stack.Screen name="ScoreBoarding" component={ScoreBoarding} options={{ headerShown: false }}/>
        <Stack.Screen name="SelectSpecificationOfCricket" component={SelectSpecificationOfCricket} options={{ headerShown: false }}/>
        <Stack.Screen name="MakeTeam" component={MakeTeam} options={{ headerShown: false }}/>
        <Stack.Screen name="JoinTeam" component={JoinTeam} options={{ headerShown: false }}/>
        <Stack.Screen name="BottomBar" component={BottomBar} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="CreateTeam" component={Createte} */}
        <Stack.Screen name="Room" component={Room} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})