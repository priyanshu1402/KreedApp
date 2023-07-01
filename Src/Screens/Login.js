import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Color } from '../Components/GlobalStyle'
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Login = ({ navigation }) => {

  const FirebaseLogin = () => {
    firestore()
      .collection('Users')
      // Filter results
      .where('username', '==', username)
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot)
        if (querySnapshot.docs.length > 0) {


          if (querySnapshot.docs[0]._data.password == password) {
            navigation.navigate('BottomBar')
          }
        }
        else {
          alert('User not found Check Username and password');
        }
      });
  }

  const [username, setusername] = useState()
  const [password, setpassword] = useState();
  const gotosignup=()=>{
    navigation.navigate("SignUp")
  }





  return (
    <View style={{ flex: 1, backgroundColor: '#113513' }}>
      <LinearGradient colors={['#000', '#154015', '#154015', '#154015', '#154015', '#000']} style={{ flex: 1 }}>


        <View style={styles.Box}>
          <Text style={styles.LoginHeading}>
            LOGIN
          </Text>
          <View style={styles.TextInputBox}>
            <TextInput
              placeholder='Username or Phone Number'
              placeholderTextColor={'#878A8B'}
              style={{ color: 'white' }}
              onChangeText={(text) => setusername(text)}
              value={username}
            />
          </View>
          <View style={[styles.TextInputBox, { marginTop: 15 }]}>
            <TextInput
              placeholder='Password'
              placeholderTextColor={'#878A8B'}
              style={{ color: 'white' }}
              secureTextEntry={true}
              onChangeText={(text) => setpassword(text)}
              value={password}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.IconBox}>
              <Image source={require('../Assets/GoogleIcon.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <Image source={require('../Assets/FacebookIcon.png')} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>

            <Text style={styles.ForgetText}> Forgotten your password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={FirebaseLogin} style={styles.LoginButton}>
            <Text style={styles.LoginButtonText}>Log In</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.ForgetText}> Don’t have an account?</Text>
            <TouchableOpacity onPress={gotosignup}><Text style={[styles.ForgetText, { color: '#86D957', fontWeight: 'bold' }]}>  Sign Up</Text></TouchableOpacity>
          </View>

        </View>
      </LinearGradient>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  Box: {
    marginLeft: 20,
    marginTop: 140,
    backgroundColor: 'black',
    borderRadius: 20,
    width: 320,
    height: 460
  },
  LoginHeading: {
    color: 'white',
    marginLeft: 25,
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold'
  },
  TextInputBox: {
    backgroundColor: '#33363A',
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 40,
    paddingHorizontal: 15,
  },
  IconBox: {
    marginTop: 15,
    marginHorizontal: 50,
    backgroundColor: "#0D1D12",
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  ForgetText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '300',
    marginTop: 15
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