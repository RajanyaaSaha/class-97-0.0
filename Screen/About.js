import React from "react";
import{Text,View,StylesSheet,Button} from "react-native";
const About = ()=>{
<View styles={styles.container}>
    <Text>
        this is about screen
    </Text>
</View>
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"centre",
        justifyContent:"center",
        textAlign:"center",
    }
});
export default About