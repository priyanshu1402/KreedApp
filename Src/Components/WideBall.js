import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';

const WideBall = () => {
    return (
        <View style={{ marginTop: '50%', marginHorizontal: 20, borderRadius: 10, backgroundColor: 'black', borderColor: '#A9F77F', borderWidth: 1 }}>
            <Text style={{ color: '#A9F77F', fontSize: 15, margin: 30, marginLeft: '38%', textAlign: 'center', borderColor: '#A9F77F', borderBottomWidth: 1, width: 80 }}>Wide Ball</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                <TouchableOpacity style={styles.RunCircle}>
                    <Text style={styles.RunCircleText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.RunCircle}>
                    <Text style={styles.RunCircleText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.RunCircle}>
                    <Text style={styles.RunCircleText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.RunCircle}>
                    <Text style={styles.RunCircleText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.RunCircle}>
                    <Text style={styles.RunCircleText}>5</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>

                <TouchableOpacity style={styles.RunCircle}>
                    <Text style={styles.RunCircleText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.RunCircle}>
                    <Text style={styles.RunCircleText}>7</Text>
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', marginTop: 15, }}>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.ButtonText}>Four</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.ButtonText}>Six</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginTop: -15, }}>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.ButtonText}>Stumped</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.ButtonText}>Run Out</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.ButtonText}>Hit Wicket</Text>
                </TouchableOpacity>

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

export default WideBall

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
        marginHorizontal: 10,
        marginLeft: 18
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
        margin: 20,
        marginHorizontal: 10

    },
    ButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12
    },
})