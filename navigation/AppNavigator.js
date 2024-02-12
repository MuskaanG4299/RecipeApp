import { StyleSheet,Text,View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeList from "../screens/RecipeListScreen";
const Stack= createStackNavigator();
const AppNavigator=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{}}>
                <Stack.Screen name="Welcome" component={WelcomeScreen}/>
                <Stack.Screen name="RecipeList" component={RecipeList}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default AppNavigator;
const styles= StyleSheet.create({});