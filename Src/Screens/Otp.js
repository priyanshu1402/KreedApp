import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Otp = () => {

  const navigation = useNavigation();
  const gotobotttombar = ()=>{
    navigation.navigate("BottomBar");
  }
  return (
    <View style={{flex:1}}>
      <LinearGradient colors={['#000', '#154015','#154015','#154015', '#154015','#000','#000']} style={{flex:1}}>
      <View style={styles.Box}>
        <Text style={styles.OTPHeading}>
        OTP Authentication
        </Text>
        <Text style={styles.ForgetText}> We have sent a code to</Text>
        <Text style={styles.NumberText}> ********16</Text>
        <Text style={[styles.ForgetText,{width:250,marginHorizontal:30}]}> Please enter OTP which has been sent to your Phone</Text>
        <View style={styles.TextInputBox}>
          <TextInput
          placeholder='Enter OTP '
          placeholderTextColor={'#878A8B'}
          style={{color:'white'}}
          />
        </View>
        
        <TouchableOpacity onPress={gotobotttombar}><Text style={[styles.ForgetText,{color:'#86D957', fontWeight:'bold', textAlign:'right',marginRight:20}]}>Resend</Text></TouchableOpacity>
        <TouchableOpacity style={styles.LoginButton}>
          <Text style={styles.LoginButtonText}>Create My Account</Text>
        </TouchableOpacity>

      </View>
      </LinearGradient>
    </View>
  )
}

export default Otp

const styles = StyleSheet.create({
  Box:{
    marginLeft:20,
    marginTop:140,
    backgroundColor:'black',
    borderRadius:20,
    width:320,
    height:400
  },
  OTPHeading:{
    color:'white',
    marginLeft:25,
    marginTop:30,
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center'
  },
  TextInputBox:{
    backgroundColor:'#33363A',
    marginHorizontal:20,
    borderRadius:20,
    marginTop:40,
    paddingHorizontal:15,
  },
  IconBox:{
    marginTop:15,
    marginHorizontal:50,
    backgroundColor:"#0D1D12",
    width:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
  },
  ForgetText:{
    color:'#ffffff',
    textAlign:'center',
    fontSize:12,
    fontWeight:'300',
    marginTop:15
  },
  NumberText:{
    color:'#ffffff',
    textAlign:'center',
    fontSize:18,
    fontWeight:'700',
    marginTop:8
  },
  LoginButton:{
    backgroundColor:'#436A2E',
    paddingHorizontal:20,
    paddingVertical:10,
    alignItems:'center',
    width:250,
    marginLeft:38,
    borderRadius:20,
    marginTop:15
  },
  LoginButtonText:{
    color:'white',
    fontSize:18,
    fontWeight:'bold'
  }
})