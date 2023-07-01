import { StyleSheet, Text, View, Modal } from 'react-native'
import React, { useState } from 'react'
import RoomHeader from '../Components/RoomHeader'
import ScoreBoard from '../Components/ScoreBoard'
import { TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import SelectPlayer from '../Components/SelectPlayer'
import OverThrowModal from '../Components/OverThrowModal'
import Stumped from '../Components/Stumped'
import CoughtByModal from '../Components/CoughtByModal'
import LegByesModal from '../Components/LegByesModal'
import NoBallModal from '../Components/NoBallModal'
import WideBall from '../Components/WideBall'
import { useNavigation } from '@react-navigation/native'
import SelectPlayerForTeam from '../Components/SelectPlayerForTeam'

const ScoreBoarding = () => {
    const navigation = useNavigation();
    const [data, setData] = useState();
    const [status,setstatus]=useState(false);
    const [value,setvalue]=useState();

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }} >
            <RoomHeader />
            <ScoreBoard />
            <View>
                <Text style={{ color: 'white', textAlign: 'center', borderBottomColor: 'white', borderBottomWidth: 1, marginHorizontal: '30%', fontSize: 15, }}>Live ScoreBoarding</Text>

            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.CategoryHeading}>Runs</Text>

            </View>
            <View style={{ flexDirection: 'row', margin: 10 }}>
                <TouchableOpacity style={styles.RunCircle}>
                    <Text style={styles.RunCircleText}>.</Text>
                </TouchableOpacity>
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

                <TouchableOpacity style={{ flexDirection: 'row', borderColor: '#86D957', borderWidth: 1, height: 35, borderRadius: 10, paddingHorizontal: 5, alignItems: 'center', paddingRight: 15 }}
                    onPress={() => setData("throw")}>
                    <Ionicons name="tennisball" size={20} color="#ED4C5C" style={{}} />
                    <Text style={[styles.RunCircleText, { textAlign: 'center', fontSize: 12 }]}>Over {'\n'} throw</Text>
                    <View style={{ position: 'absolute', top: '65%', left: '120%' }}>

                        <AntDesign name="plus" size={20} color="#fff" style={{ backgroundColor: '#86D957', borderRadius: 10, }} />
                    </View>

                </TouchableOpacity>

            </View>
            <Text style={styles.CategoryHeading}>Dismissal</Text>

            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <TouchableOpacity style={styles.Button} onPress={() => {setData("bowled"); setstatus(true)}}>
                    <Text style={styles.ButtonText}>Bowled</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() => setData("LBW")}>
                    <Text style={styles.ButtonText}>LBW</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() => {setData("stumped"); setstatus(true)}}>
                    <Text style={styles.ButtonText}>Stumped</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() => setData("hit wicket")}>
                    <Text style={styles.ButtonText}>Hit Wicket</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.Button} onPress={() =>{ setData("caught");  setstatus(true)}}>
                    <Text style={styles.ButtonText}>Caught</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() => {setData("runout");  setstatus(true)}}>
                    <Text style={styles.ButtonText}>Run out</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.CategoryHeading} onPress={() => setData("boundary")}>Boundry</Text>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <TouchableOpacity style={styles.Button} onPress={() => setData("four")}>
                    <Text style={styles.ButtonText}>Four</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} >
                    <Text style={styles.ButtonText} onPress={() => setData("six")}>Six</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.CategoryHeading}>Extra</Text>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <TouchableOpacity style={styles.Button} onPress={() => {;  setstatus(true)}}>
                    <Text style={styles.ButtonText}>Wide</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() => {setData("no-ball");  setstatus(true) }}>
                    <Text style={styles.ButtonText}>No-Ball</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() =>{ setData("legbyes");  setstatus(true)}}>
                    <Text style={styles.ButtonText}>Byes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() =>{ setData("legbyes"); setstatus(true)}}>
                    <Text style={styles.ButtonText}>Leg Byes</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.StartGameButton}>
                <LinearGradient colors={['#63A140', '#111C0B']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.LinearGradientStartGameButtonButton} >

                    <Text style={styles.StartGameButtonText}>Innings Over</Text>
                </LinearGradient>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                // visible={true}
                visible={status}
            >
            <>
                <TouchableOpacity  style={{marginLeft:"auto",marginTop:60}} onPress={()=>setstatus(false)}><Text style={{color:"white",fontSize:35}}>x</Text></TouchableOpacity>
                
                {data === "throw" ? <OverThrowModal setstatus={setstatus} setvalue={setvalue}/> :
                    data === "stumped" ? <Stumped setstatus={setstatus} setvalue={setvalue} /> :
                        data === "legbyes" ? <LegByesModal setstatus={setstatus} setvalue={setvalue} /> :
                            data === "no-ball" ? <NoBallModal setstatus={setstatus} setvalue={setvalue} /> :
                                data === "wide" ? <WideBall setstatus={setstatus} setvalue={setvalue} /> :
                                 data === "caught" ? <SelectPlayerForTeam setstatus={setstatus} setvalue={setvalue}/> : null}
            </>

                {/* <SelectPlayerForTeam/> */}
                {/* <ConfirmPlayerInTeam/> */}
                {/* <MakecoHost /> */}
                {/* <SelectPlayer/> */}

                {/* <Stumped/> */}
                {/* <CoughtByModal/> */}

                {/* <LegByesModal/> */}
                {/* <NoBallModal/> */}
                {/* <WideBall/> */}


            </Modal>

        </View>
    )
}

export default ScoreBoarding

const styles = StyleSheet.create({
    CategoryHeading: {
        color: 'white',
        marginLeft: 10,
        marginTop: 10
    },
    RunCircle: {
        borderColor: '#86D957',
        borderWidth: 1,
        borderRadius: 25,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 6
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
        margin: 5,
        marginHorizontal: '1.21%'

    },
    ButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12
    },
    StartGameButton: {
        backgroundColor: '#436A2E',
        alignItems: 'center',
        borderRadius: 15,
        alignSelf: 'flex-end',
        marginRight: 20,
        marginBottom: 10,
        marginTop: 20
    },
    StartGameButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    LinearGradientStartGameButtonButton: {
        padding: 10,
        paddingHorizontal: 30,
        alignItems: 'center',
        width: '100%',
        borderRadius: 15,
    },



})