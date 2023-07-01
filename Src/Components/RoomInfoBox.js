import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/dist/Octicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const RoomInfoBox = () => {
    return (
        <View style={styles.infoBox}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Room Name:  </Text>
                <Text style={{ color: 'white', fontSize: 18 }}>Tithi's Room</Text>
                <TouchableOpacity style={styles.infoBoxIcon}>
                    <Octicons name="paper-airplane" size={25} color="#fff" style={{ transform: [{ rotate: '-45deg' }] }} />

                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Room Name:  </Text>
                <Text style={{ color: 'white', fontSize: 18, color: '#86D957' }}>room@123</Text>
                <TouchableOpacity style={styles.infoBoxIcon}>

                    <FontAwesome name="whatsapp" size={25} color="#fff" />
                </TouchableOpacity>
            </View>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 12, marginTop: 10 }}>
                Share Tithi’s room and room@123 with friends
            </Text>





        </View>
    )
}

export default RoomInfoBox

const styles = StyleSheet.create({
    infoBox: {
        borderColor: '#154015',
        borderWidth: 3,
        alignSelf: 'center',
        padding: 20,
        width: '90%',
        borderRadius: 20,
        marginBottom: 10
    },
    infoBoxIcon: {
        marginLeft: 'auto',
        marginBottom: 10
    },
})