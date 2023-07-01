import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import PlayerNameAndRunInScoreBoard from './PlayerNameAndRunInScoreBoard'

import LinearGradient from 'react-native-linear-gradient';

const ScoreBoard = () => {
    return (
        <View style={{ backgroundColor: '#14171C' , marginHorizontal:20, borderRadius:10, marginTop:10,paddingVertical:10}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <TouchableOpacity style={styles.TossButtonBox}>
                    <Text style={styles.TossText}>Team 1</Text>
                </TouchableOpacity>
                <Text style={{ color: 'white' }}>VS</Text>
                <TouchableOpacity style={styles.TossButtonBox}>
                    <Text style={styles.TossText}>Team 1</Text>
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>0 - 0</Text>
                <Text style={{ color: 'white' }}>0 Overs</Text>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20 }}>
                <View>

                    <PlayerNameAndRunInScoreBoard />
                    <PlayerNameAndRunInScoreBoard />
                </View>
                <View>
                    <PlayerNameAndRunInScoreBoard />
                </View>
            </View>

            <TouchableOpacity style={styles.StartGameButton}>
                <LinearGradient colors={['#2E6212', '#1B2B11']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.LinearGradientStartGameButtonButton} >

                    <Text style={styles.StartGameButtonText}>View Scorecard</Text>
                </LinearGradient>
            </TouchableOpacity>


        </View>
    )
}

export default ScoreBoard

const styles = StyleSheet.create({
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
    StartGameButton: {
        backgroundColor: '#436A2E',
        alignItems: 'center',
        borderRadius: 5,
        alignSelf: 'flex-end',
        marginRight:20,
        marginBottom:10
    },
    StartGameButtonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'
    },
    LinearGradientStartGameButtonButton: {
        borderRadius: 5,
        padding:5,
        paddingHorizontal:10,
        alignItems: 'center',
        width: '100%'
    },
})