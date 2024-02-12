import {StyleSheet,Text,View,Image,TouchableOpacity }from "react-native";
import React from "react";

const WelcomeScreen =({navigation})=>{
    return(
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <TouchableOpacity onPress={()=>navigation.navigate("RecipeList")} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Let's Go</Text>
          </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 500, // Adjust the width as needed
      height: 350, // Adjust the height as needed
      resizeMode: 'contain', // This ensures that the image maintains its aspect ratio and fits within the specified width and height
    },
    closeButtonText: {
        color: '#fff', // White text color
        fontSize: 16,
        fontWeight: 'bold',
      },
      closeButton: {
        backgroundColor: '#007bff', // Bootstrap primary color
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
      },
  });
export default WelcomeScreen;
