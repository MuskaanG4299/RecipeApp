import React, { useEffect, useState } from 'react';
import { View, Image, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <ActivityIndicator size="large" color="#0000ff" />
    <TouchableOpacity style={{backgroundColor:"#f96163"}}>
        <Text>
            Let's Go
        </Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200, // Set the width and height of your logo accordingly
    height: 200,
    marginBottom: 20,
  },
});

export default SplashScreen;
