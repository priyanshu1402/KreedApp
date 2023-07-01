import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';

const CoughtByModal = () => {

  const MemberListData = [
    { key: 'A', Name: 'PlayerName', },
    { key: 'B', Name: 'PlayerName', },
    { key: 'C', Name: 'PlayerName', },
    { key: 'D', Name: 'PlayerName', },
    { key: 'E', Name: 'PlayerName', },
    { key: 'A', Name: 'PlayerName', },
    { key: 'B', Name: 'PlayerName', },
    { key: 'C', Name: 'PlayerName', },
    { key: 'D', Name: 'PlayerName', },
    { key: 'E', Name: 'PlayerName', },
    { key: 'A', Name: 'PlayerName', },
    { key: 'B', Name: 'PlayerName', },
    { key: 'C', Name: 'PlayerName', },
    { key: 'D', Name: 'PlayerName', },
    { key: 'E', Name: 'PlayerName', },
];

const MemberList = ({ item }) => (
    <TouchableOpacity style={{ width: '40%', marginLeft: 20, margin: 2, flexDirection: 'row', padding: 5, alignItems: 'center', backgroundColor:'#2B2B2B', alignItems:'center', borderRadius:10, paddingLeft:10, }}>

        <Image source={require('../Assets/MSD.jpg')} style={{ width: 25, height: 25, borderRadius: 25 }} />

        <Text numberOfLines={1} style={{ color: 'white', fontSize: 12, marginLeft: 5 }}>{item.Name}</Text>
    </TouchableOpacity>
);
  return (
    <View style={{ marginTop: '30%', marginHorizontal: 20, borderRadius: 10, backgroundColor: 'black', borderColor: '#A9F77F', borderWidth: 1 }}>
      <Text style={{ color: '#A9F77F', fontSize: 15, margin: 10, marginLeft: '40%', textAlign: 'center', borderColor: '#A9F77F', borderBottomWidth: 1, width: 70 }}>Caught</Text>
      <Text style={{ color: '#fff', fontSize: 15, marginLeft: 20, marginBottom: 30, borderBottomWidth: 1, }}>Cought By :</Text>

      <View style={{justifyContent:'space-between'}}>
                <FlatList
                    data={MemberListData}
                    renderItem={MemberList}
                    numColumns={2}
                    keyExtractor={item => '_' + item.key}
                />
            </View>
            <TouchableOpacity style={styles.StartGameButton}>
                <LinearGradient colors={['#86D957', '#20341D']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.LinearGradientStartGameButtonButton} >

                    <Text style={styles.StartGameButtonText}>Save</Text>
                </LinearGradient>
            </TouchableOpacity>

    </View>
  )
}

export default CoughtByModal

const styles = StyleSheet.create({
  StartGameButton: {
    backgroundColor: '#436A2E',
    alignItems: 'center',
    width: '40%',
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 10,
    marginTop: 30
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
RunCircle: {
    borderColor: '#86D957',
    borderWidth: 1,
    borderRadius: 25,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
},
RunCircleText: {
    color: 'white'
},
Button: {
    borderColor: '#86D957',
    borderWidth: 1,
    borderRadius: 10,
    width: 83,
    paddingVertical: 7,
    alignItems: 'center',
    marginHorizontal: '1.21%'

},
ButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12
},
})