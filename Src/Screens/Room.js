import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Room = () => {
  const [Option, setOption] = useState('Join');
  const navigation=useNavigation();


  return (
    <View style={{ flex: 1,}}>
      <LinearGradient colors={['#000', '#154015', '#154015', '#000']} style={{ alignItems: 'center', justifyContent: 'center', width:'100%', height:'100%' }}>

      
      <View style={styles.Box}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10 }}>
          <TouchableOpacity style={styles.joinCreateButton} onPress={() => setOption('Create')}>
            <Text style={styles.joinCreateButtonText}>Create</Text>
            {Option=='Create'? <LinearGradient colors={['#308400', '#EFF30F']} 
            start={{x:0,y:0}}
            end={{x:1,y:0}}
            style={styles.LinearGradientjoinCreateLine}>
            </LinearGradient>: null}
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.joinCreateButton} onPress={() => setOption('Join')}>
            <Text style={styles.joinCreateButtonText}>Join</Text>
            {Option=='Join'? <LinearGradient colors={['#308400', '#EFF30F']} 
            start={{x:0,y:0}}
            end={{x:1,y:0}}
            style={styles.LinearGradientjoinCreateLine}>
            </LinearGradient>: null}
          </TouchableOpacity>
        </View>


        {Option == 'Create' ? <View>
          <View style={[styles.TextInputBox, { marginTop: 35 }]}>
            <TextInput
              placeholder='Room Name'
              placeholderTextColor={'#fff'}
              style={{ color: 'white' }}
            />
          </View>

          <View style={[styles.TextInputBox, { marginTop: 35 }]}>
            <TextInput
              placeholder='Password'
              placeholderTextColor={'#fff'}
              style={{ color: 'white' }}
            />
          </View>
          <Text style={styles.chooseSport}>Choose Sport</Text>
          <View style={{ flexDirection: 'row', paddingTop: 10 }}>
            <TouchableOpacity style={styles.SelectSportBox}>
              <Text style={styles.SelectSportBoxText}>Badminton</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SelectSportBox}>
              <Text style={styles.SelectSportBoxText}>Cricket</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.LoginButton}
          onPress={()=>navigation.navigate('MakeTeam')}>
            <LinearGradient colors={['#86D957', '#000']} 
            start={{x:0,y:0}}
            end={{x:1,y:0}}
            style={styles.LinearGradientButton} >

              <Text style={styles.LoginButtonText}>Create Room</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View> : null}




        {Option == 'Join' ? <View>
          <View style={[styles.TextInputBox, { marginTop: 35 }]}>
            <TextInput
              placeholder='Room Name'
              placeholderTextColor={'#fff'}
              style={{ color: 'white' }}
            />
          </View>

          <View style={[styles.TextInputBox, { marginTop: 35 }]}>
            <TextInput
              placeholder='Password'
              placeholderTextColor={'#fff'}
              style={{ color: 'white' }}
            />
          </View>

          <TouchableOpacity style={[styles.LoginButton, { marginTop: 150 }]}
          onPress={()=>navigation.navigate('JoinTeam')}>
            <LinearGradient colors={['#86D957', '#000']} 
            start={{x:0,y:0}}
            end={{x:1,y:0}}
            style={styles.LinearGradientButton} >

              <Text style={styles.LoginButtonText}>Join Room</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View> : null}

      </View>
      </LinearGradient>
    </View>
  )
}

export default Room

const styles = StyleSheet.create({
  Box: {
    backgroundColor: 'black',
    borderRadius: 20,
    width: 320,
    height: 460,
  },
  joinCreateButtonText: {
    color: 'white',
    fontSize: 24,
  },
  joinCreateButton:{
    alignItems:'center'
  },
  TextInputBox: {
    backgroundColor: '#453F34',
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 40,
    paddingHorizontal: 15,
  },
  chooseSport: {
    color: 'white',
    marginLeft: 20,
    fontSize: 15,
    marginTop: 25
  },
  SelectSportBox: {
    borderColor: "#86D957",
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
    marginLeft: 20
  },
  SelectSportBoxText: {
    color: 'white',
    fontSize: 15
  },
  LoginButton: {
    backgroundColor: '#436A2E',
    alignItems: 'center',
    width: '85%',
    borderRadius: 20,
    marginTop: 55,
    alignSelf: 'center'
  },
  LoginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  LinearGradientButton:{
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '100%'
  },
  LinearGradientjoinCreateLine:{
    height:10,
    width:100
  }
})