import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {NavigationContainer} from "react-native"
import  {mainStackNavigator} from "./Navigation/StackNavigator"

const App=()=>{
return(){
  <NavigationContainer>
  <mainStackNavigator/>
  </NavigationContainer>
}
}
export  default App