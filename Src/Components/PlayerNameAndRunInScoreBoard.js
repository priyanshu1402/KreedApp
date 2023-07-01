import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const PlayerNameAndRunInScoreBoard = () => {
    return (
        <View style={{ flexDirection: 'row', marginVertical:5 }}>
            <View style={{ flexDirection: 'row', backgroundColor: '#464B4E', alignItems: 'center', borderRadius: 10, paddingRight: 8 }}>
                <Image source={require('../Assets/MSD.jpg')} style={{ width: 25, height: 25, borderRadius: 25, borderColor: '#86D957', borderWidth: 1 }} />
                <Text style={{ color: 'white', fontSize: 12, marginLeft: 5 }}>Shiva</Text>
            </View>
            <Text style={{ color: 'white', fontSize: 12, marginLeft: 5 }}>0</Text>
            <Text style={{ color: 'white', fontSize: 12, marginLeft: 5 }}>(0)</Text>
        </View>
    )
}

export default PlayerNameAndRunInScoreBoard

const styles = StyleSheet.create({})