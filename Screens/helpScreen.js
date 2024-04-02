import { useNavigation } from "@react-navigation/native";
import { React } from "react";
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from "react-native-gesture-handler";


export default function HelpScreen(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={{fontSize:24,fontWeight:500,padding:10}}>should kown this contents details</Text>
           

            <Text style={{padding:10}}>We are here to help you find a account maintaine and handle the daily expenese and add notifications to for daily morning rotatine and maintaine day to expenese. </Text>
       
            <TouchableOpacity onPress={() => {
                navigation.navigate('.')
            }} style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                <Text style={{width:'30%',height:25,backgroundColor:'red',justifyContent:'center',textAlign:'center'}}>Next</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccc',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
  });
