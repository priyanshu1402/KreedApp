import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React,{useState,useEffect} from 'react'
import RoomHeader from '../Components/RoomHeader'
import SelectPlayerForTeam from '../Components/SelectPlayerForTeam'
import RoomInfoBox from '../Components/RoomInfoBox'
import LinearGradient from 'react-native-linear-gradient';
import ConfirmPlayerInTeam from '../Components/ConfirmPlayerInTeam'
import MakecoHost from '../Components/MakecoHost'

const MakeTeam = () => {
    const [status,setstatus]=useState("select");
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <RoomHeader />
            <RoomInfoBox />


            <Text style={{ color: '#A9F77F', fontSize: 18, marginLeft: 20 }}>Choose Team</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ marginLeft: 20, marginTop: 20, width: '40%' }}>
                    <LinearGradient colors={['#86D957', '#20341D']}
                        style={{ padding: 10, borderRadius: 10 }}
                    >

                        <Text style={{ textAlign: 'center', color: 'white' }} >Team 1</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 20, marginTop: 20, width: '40%' }}>
                    <LinearGradient colors={['#86D957', '#20341D']}
                        style={{ padding: 10, borderRadius: 10 }}
                    >

                        <Text style={{ textAlign: 'center', color: 'white' }} >Team 2</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>


            <View style={{ position: 'absolute', top: '90%', width: '100%' }}>
                
                <TouchableOpacity style={styles.StartGameButton}>
                    <LinearGradient colors={['#86D957', '#20341D']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.LinearGradientStartGameButtonButton} >

                        <Text style={styles.StartGameButtonText}>Start Game</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>

            <Modal
             animationType="slide"
             transparent={true}
             // visible={true}
             visible={true}
             >
               { status==="select"?<SelectPlayerForTeam status={status} setstatus={setstatus}/>:
               status==="confirm"?<ConfirmPlayerInTeam status={status} setstatus={setstatus}/>:

               status==="host"?<MakecoHost status={status} setstatus={setstatus}/>:null}
                {/* <ConfirmPlayerInTeam/> */}
                {/* <MakecoHost/> */}


            </Modal>

        </View>
    )
}

export default MakeTeam

const styles = StyleSheet.create({
    StartGameButton: {
        backgroundColor: '#436A2E',
        alignItems: 'center',
        width: '85%',
        borderRadius: 20,
        alignSelf: 'center'
    },
    StartGameButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    LinearGradientStartGameButtonButton: {
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        width: '100%'
    },
})