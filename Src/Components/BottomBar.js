import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Games from '../Screens/Games';
import Profile from '../Screens/Profile';
import Icon from 'react-native-vector-icons/Foundation';
import Game from 'react-native-vector-icons/MaterialCommunityIcons';
import User from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();


const BottomBar = () => {
    return (
        <Tab.Navigator 
        screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:{
                backgroundColor:'black'
            }
                        
        }}
        
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={focused?{ backgroundColor:'#77C04E' ,width:50, alignItems:'center', paddingVertical:3, borderRadius:5}:null}>

                        <Icon name="home" size={30} color="#fff" />
                        </View>

                    ),
                }} />
            <Tab.Screen name="Games" component={Games} options={{
                tabBarIcon: ({ focused,color, size }) => (
                    <View style={focused?{ backgroundColor:'#77C04E' ,width:50, alignItems:'center', paddingVertical:3, borderRadius:5}:null}>

                    <Game name="gamepad-variant" size={30} color="#fff" />
                    </View>

                ),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <View style={focused?{ backgroundColor:'#77C04E' ,width:50, alignItems:'center', paddingVertical:3, borderRadius:5}:null}>

                    <User name="user" size={30} color="#fff" />
                    </View>

                ),
            }} />
        </Tab.Navigator>
    )
}

export default BottomBar

const styles = StyleSheet.create({})