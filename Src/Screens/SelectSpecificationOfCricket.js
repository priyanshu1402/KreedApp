import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import RoomHeader from '../Components/RoomHeader'
import LinearGradient from 'react-native-linear-gradient';

const SelectSpecificationOfCricket = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <RoomHeader />

      <View style={{ flexDirection: 'row', height: '15%', alignItems: 'center', }}>
        <Text style={styles.Text}>Choose No. of Overs :</Text>

      </View>
      <Text style={styles.Text}>Choose Ball Type :</Text>
      <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
        <View style={styles.BallTableHeadingColumn}>
          <View style={styles.BallTableHeading}>
            <Text style={styles.BallTableHeadingText}>Tennis Ball</Text>
          </View>
        </View>
        <View style={[styles.BallTableHeadingColumn, { borderLeftWidth: 0 }]}>
          <View style={styles.BallTableHeading}>
            <Text style={styles.BallTableHeadingText}>Cricket Ball</Text>
          </View>

          <View style={{ height: 60 }}>

          </View>

        </View>

      </View>
      <Text style={styles.Text}>Toss :</Text>
      <View style={{ marginHorizontal: 20, backgroundColor: '#102808', padding: 10, borderRadius: 20, flexDirection: 'row' }}>

        <View style={styles.TossColumn}>
          <Text style={styles.TossText}>Won by :</Text>

          <TouchableOpacity style={styles.TossButtonBox}>
            <Text style={styles.TossText}>Team 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TossButtonBox}>
            <Text style={styles.TossText}>Team 1</Text>
          </TouchableOpacity>


        </View>


        <View style={styles.TossColumn}>
          <Text style={styles.TossText}>Choose to :</Text>
          <TouchableOpacity style={styles.TossButtonBox}>
            <Text style={styles.TossText}>Bat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TossButtonBox}>
            <Text style={styles.TossText}>Bowl</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.TossButtonBox, { backgroundColor: '#000', marginTop: 20, borderWidth: 0.5, borderRadius: 10 }]}>
            <Text style={styles.TossText}>Save</Text>
          </TouchableOpacity>

        </View>


      </View>

      <TouchableOpacity style={styles.StartGameButton}>
        <LinearGradient colors={['#86D957', '#20341D']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.LinearGradientStartGameButtonButton} >

          <Text style={styles.StartGameButtonText}>Play</Text>
        </LinearGradient>
      </TouchableOpacity>


    </View>
  )
}

export default SelectSpecificationOfCricket

const styles = StyleSheet.create({
  Text: {
    color: 'white',
    fontSize: 18,
    marginLeft: 18,
    margin: 20
  },
  BallTableHeading: {
    backgroundColor: '#86D957',
    alignItems: 'center',
    padding: 8
  },
  BallTableHeadingText: {
    fontSize: 15,
    color: 'black',
  },
  BallTableHeadingColumn: {
    width: '50%',
    borderColor: '#86D957',
    borderWidth: 2
  },
  TossText: {
    color: 'white',
    fontSize: 15,
  },
  TossButtonBox: {
    borderColor: '#86D957',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: 100,
    alignItems: 'center',
    margin: 5
  },
  TossColumn: {
    width: '50%',
    alignItems: 'center'
  },
  StartGameButton: {
    backgroundColor: '#436A2E',
    alignItems: 'center',
    width: '90%',
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginRight:20,
    marginBottom:10,
    marginTop:'auto'
},
StartGameButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
},
LinearGradientStartGameButtonButton: {
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    width: '100%'
},
})