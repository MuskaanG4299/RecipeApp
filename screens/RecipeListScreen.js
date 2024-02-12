import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import RecipeCards from "../components/RecipeCards";
// import RecipeList from '../RecipeData';

const RecipeListScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Recipes</Text>
            </View>
            <RecipeCards/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', // Adjust background color as needed
      paddingHorizontal: 16, // Add horizontal padding for content spacing
      paddingTop: 22, // Add top padding for SafeAreaView
    },
    header: {
      marginBottom: 16, // Add some space between header and cards
    },
    headerText: {
      fontSize: 22,
      fontWeight: 'bold',
    },
  });
  

export default RecipeListScreen;
