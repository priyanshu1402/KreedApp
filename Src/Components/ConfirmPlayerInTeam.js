import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const ConfirmPlayerInTeam = ({status,setstatus}) => {
    const navigation=useNavigation();

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
    ];

    const MemberList = ({ item }) => (
        <TouchableOpacity style={{ marginLeft: 20, margin: 2, flexDirection: 'row', padding: 2, alignItems: 'center' }}>

            <Image source={require('../Assets/MSD.jpg')} style={{ width: 25, height: 25, borderRadius: 25 }} />

            <Text numberOfLines={1} style={{ color: 'white', fontSize: 12, marginLeft: 5 }}>{item.Name}</Text>
        </TouchableOpacity>
    );


    return (
        <View style={{ marginTop: 'auto', backgroundColor: 'black', borderColor: '#A9F77F', borderTopWidth: 1 }}>
            <Text style={{ color: '#A9F77F', fontSize: 18, margin: 20, }}>Confirm Team1 and Team2</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>


                <View style={{ width: '45%' }}>
                    <TouchableOpacity style={styles.SelectSportBox}>
                        <Text style={styles.SelectSportBoxText}>Team 1</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={MemberListData}
                        renderItem={MemberList}
                        numColumns={1}
                        keyExtractor={item => '_' + item.key}
                    />
                </View>
                <View style={{ width: '45%', marginRight: 10 }}>
                    <TouchableOpacity style={styles.SelectSportBox}>
                        <Text style={styles.SelectSportBoxText}>Team 2</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={MemberListData}
                        renderItem={MemberList}
                        numColumns={1}
                        keyExtractor={item => '_' + item.key}
                    />
                </View>


            </View>
            <View style={{flexDirection:'row', justifyContent:'space-evenly',marginTop:15}}>

                <TouchableOpacity style={styles.StartGameButton}>
                    <LinearGradient colors={['#20341D', '#86D957']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.LinearGradientStartGameButtonButton} >

                        <Text style={styles.StartGameButtonText}>Undu</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.StartGameButton}
                onPress={()=>setstatus('host')}>
                    <LinearGradient colors={['#86D957', '#20341D']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.LinearGradientStartGameButtonButton} >

                        <Text style={styles.StartGameButtonText}>Confirm</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ConfirmPlayerInTeam

const styles = StyleSheet.create({
    SelectSportBox: {
        borderColor: "#86D957",
        borderWidth: 1,
        padding: 8,
        borderRadius: 10,
        marginLeft: 20
    },
    SelectSportBoxText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    },
    StartGameButton: {
        backgroundColor: '#436A2E',
        alignItems: 'center',
        width: '35%',
        borderRadius: 20,
        marginRight: 20,
        marginBottom: 10
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