// MainScreen.js
import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import recipesData from './RecipeData';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
       
        data={recipesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.recipeBox}>
            <Text style={styles.recipeTitle}>{item.title}</Text>
            <Text style={styles.recipeIngredients}>{item.ingredients.join(', ')}</Text>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    recipeBox: {
      flex: 1,
      margin: 10,
      padding: 10,
      borderRadius: 8,
      backgroundColor: '#f8f9fa',
    },
    recipeTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    recipeIngredients: {
      fontSize: 14,
    },
  });
  
export default MainScreen;
