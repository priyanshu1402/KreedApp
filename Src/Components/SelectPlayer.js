import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';

const SelectPlayer = () => {const [isSelected, setSelection] = useState(false);

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
        <View style={{ marginTop: 'auto', backgroundColor: 'black', borderColor:'#A9F77F', borderTopWidth:1 }}>
            <Text style={{ color: '#A9F77F', fontSize: 18, margin: 20, }}>Choose Next Bowler :</Text>


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

export default SelectPlayer

const styles = StyleSheet.create({
    StartGameButton: {
        backgroundColor: '#436A2E',
        alignItems: 'center',
        width: '90%',
        borderRadius: 20,
        alignSelf: 'flex-end',
        marginRight:20,
        marginBottom:10,
        marginTop:10
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