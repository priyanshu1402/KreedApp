import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/Ionicons';

const RoomHeader = () => {
    return (
        <View style={{ flexDirection: 'row', padding: 10 }}>
            <Icon name="arrow-back-outline" size={30} color="#fff" />
            <Text style={{ color: 'white', fontSize: 20, marginLeft: 10 }}>Tithi's Room</Text>
            <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 10 }}>

                <Icon name="camera" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

export default RoomHeader

const styles = StyleSheet.create({})