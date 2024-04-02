import { React, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Animated, ScrollView, Modal, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Firebase_db } from "../firebaseconfig";
import { addDoc, collection } from "firebase/firestore";

export default function ProfileScreen() {

    const animatedValue = useRef(new Animated.Value(0)).current; 
    
    const [inputFields, setInputFields] = useState([
        { name: '' }
    ])
    const [inputFields1, setInputFields1] = useState([
        { value: '' }
    ])
    const [showModel, setShowModel] = useState(false);
    const [find, setFind] = useState(false);
    var [total, setTotal] = useState(0);

    useEffect(() => {
       
    },[])

    // const newList = () => {
    //     const doc =  addDoc(collection(Firebase_db, 'list'), {totalValue:'Im total full', done: false});
    //     console.log('doc',doc);
    // }
    const addFields = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
          }).start();
        let newField = { name: '' }
        setInputFields([...inputFields, newField]);
        let newField1 = { value: '' }
        setInputFields1([...inputFields1, newField1]);
    }
    const removeField = (i) => {

       

        console.log('delindex', inputFields.length)
        let newField = [...inputFields]

        if (inputFields.length > 1) {
            newField.splice(i, 1);
        }
        else {
            alert('please fill aleast one filled')
        }
        setInputFields(newField);
        // Animated.timing(animatedValue,{
        //     toValue:0,
        //     // delay:2000,
        //     duration:5000,
        //     useNativeDriver:true,
        // }).start();

    }

    const onChangeText = (text, index) => {
        console.log("text", text);
        // console.log("TextInput",TextInput);
        console.log("index", index);
        let updateVal = inputFields?.map((item, i) => {
            if (index == i) {
                return { ...item, name: text }
            }
            return item;
        })
        setInputFields(updateVal);
        console.log("inputFields", inputFields);
        setFind(true)
    }
    const onChangeText1 = (text, index) => {
        console.log("text", text);
        // console.log("TextInput",TextInput);
        console.log("index", index);
        let updateVal = inputFields1.map((item, i) => {
            if (index == i) {
                return { ...item, value: text }
            }
            return item;
        })
        setInputFields1(updateVal);
        setFind(true);
    }

    const submit = () => {
        console.log("inputFields", inputFields);
        console.log("inputFields1", inputFields1);
        var arr = [];

        for (i = 0; i < inputFields1.length; i++) {
            if (inputFields1 != '') {

                arr.push(parseInt(inputFields1[i].value));
                // console.log(inputFields1[i].value);
            }
            console.log('arr', arr)

        }
        for (i = 0; i < arr.length; i++) {
            total += arr[i];
            setTotal(total);
        }
        

        console.log('total arr', total);
        setShowModel(!false);
        addDoc(collection(Firebase_db, 'list'), {totalValue:total, done: false});
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Menu</Text>
            <ScrollView>
                <View>
                    {inputFields.map((item, i) => {
                        return (
                            <Animated.View style={[styles.mainContent,{opacity:animatedValue}]}>
                                <TextInput
                                    style={styles.inputStyle}
                                    onChangeText={(text) => onChangeText(text, i)}
                                    value={item.name}
                                    placeholder="enter a value"
                                />
                                <Text style={styles.symbol}>*</Text>

                                <TextInput
                                    style={styles.inputStyle1}
                                    onChangeText={(text) => onChangeText1(text, i)}
                                    value={item.value}
                                    key={String(i)}
                                    placeholder="₹"
                                    inputMode="number"
                                />
                                <TouchableOpacity onPress={(key) => removeField(key)}>
                                    <MaterialCommunityIcons name="delete" size={32} style={{ marginTop: 15, color: 'red' }} color='#fff' />
                                </TouchableOpacity>

                            </Animated.View>
                        )
                    })}

                    {/* {inputFields1.map((item, i) => {
                    return (
                        <View style={styles.mainContent}>
                            <TextInput
                                style={styles.inputStyle1}
                                onChangeText={(text) => onChangeText1(text, i)}
                                value={item.value}
                                key={String(i)}
                                placeholder="₹"
                            />
                            <TouchableOpacity onPress={(index) => removeField(index)}>
                                <MaterialCommunityIcons name="delete" size={32} style={{ marginTop: 15, color: 'red' }} color='#fff' />
                            </TouchableOpacity>
                        </View>
                    )
                })} */}

                </View>
                <TouchableOpacity onPress={addFields} style={styles.btn1}>
                    {/* <Icon name="pluscircle" size={32} style={{ marginTop: 15 }} color='#fff' /> */}
                    <Text style={{ color: '#fff' }}>Add New ++</Text>
                </TouchableOpacity>
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModel}

            >
                <View style={styles.modelView}>
                    <Image
                        style={{ width: "90%", position: 'absolute', }}
                        source={require('../assets/finalanimation.gif')}
                    />
                    <Text style={styles.finalcontent}>today expenese:<Text style={styles.finalText}>{total}</Text></Text>
                    <TouchableOpacity onPress={() => setShowModel(false)} style={styles.btn2}>
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 500, letterSpacing: 3 }}>Close</Text>
                    </TouchableOpacity>
                </View>

            </Modal>
            {find == true ?
                <TouchableOpacity onPress={submit} style={styles.btn}>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 500, letterSpacing: 3 }}>Submit</Text>
                </TouchableOpacity>
                : ''}
               
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d293b',
    },
    text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        letterSpacing: 2,
    },
    inputStyle: {
        // color:"white",
        height: 40,
        width: '50%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },
    symbol: {
        fontSize: 40,
        color: 'white',
        // margin:3,
        marginTop: 5
    },
    inputStyle1: {
        width: '15%',
        height: 40,
        marginTop: 10,
        marginLeft: 5,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },
    mainContent: {
        marginLeft: 40,
        display: 'flex',
        flexDirection: 'row'
    },
    btn: {
        width: '90%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        bottom: 30,
        backgroundColor: '#17807B'
    },
    btn1: {
        width: '75%',
        height: 40,
        backgroundColor: '#3353FF',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 45,
        borderRadius: 20
    },
    btn2: {
        width: '55%',
        height: 40,
        backgroundColor: '#3353FF',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: 120,

        // marginLeft: 45,
        borderRadius: 20
    },
    modelView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.8,
        marginHorizontal: 20,
        marginVertical: 80,
        width: '90%',
        // height:40,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignContent: 'center',
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 20,
    },
    finalText: {
        fontWeight: 'bold',
        fontSize: 24,

    },
    finalcontent: {
        fontWeight: '400',
        fontSize: 18,
    },

});
