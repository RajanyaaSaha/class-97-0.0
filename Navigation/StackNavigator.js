import React from "react",
import {createStackNavigator } from "@react-navigation/stack"
import Home from "../Sreens/Home";
import About from "../ Screen/ About";
const Stack= createStackNavigator();
const mainStackNavigator =()=>{
    return(
        <Stack.Navigator
        screenOptions={{
            headerStyle:{
                background:"#34ebb1",
                     },
            headerTintColor:"white",
            headerBackTitle:"black"
        }}>
           
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="About" component={About}/>

        </Stack.Navigator>
    );
}
export{ mainStackNavigator};