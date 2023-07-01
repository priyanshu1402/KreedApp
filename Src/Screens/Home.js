import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation= useNavigation();
    const gotocreateteam=()=>{
    navigation.navigate('Room')
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{marginLeft:'auto', flexDirection:'row'}}>

                <Image style={styles.NavbarIcon} source={require('../Assets/Chat.png')} />
                <Image style={styles.NavbarIcon} source={require('../Assets/Notification.png')} />
            </View>
            <TouchableOpacity onPress={gotocreateteam} style={styles.LoginButton}>
            <Text style={styles.LoginButtonText}>Create Room </Text>
          </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    NavbarIcon:{
        marginHorizontal:10,
        marginTop:10
    },
    LoginButton: {
        backgroundColor: '#436A2E',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        width: 200,
        marginLeft: 55,
        borderRadius: 20,
        marginTop: 15
      },
      LoginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
      }
})