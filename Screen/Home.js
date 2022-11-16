import React from "react";
import {StyleSheet,View,Text,Button} from "react-native";
const Home= ()=>{
    return (
        <View style={styles.container}>
            <Text>
                This is the home screen
            </Text>
            <Button title ="go to about screen"/>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
    }
});
export default Home;