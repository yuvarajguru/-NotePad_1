import { React } from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function MainScreen(){
    return(
        <View style={styles.container}>
            <Text>welcome to mainscreen details</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccc',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
