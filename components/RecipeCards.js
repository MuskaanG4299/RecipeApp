import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Modal, Button ,Pressable, ScrollView} from 'react-native';
import recipeList from '../RecipeData';
import  userdata  from '../UsersData';
import AddRecipeScreen from '../screens/AddRecipeScreen';
import StarRating from './startRating';

const UserCard = ({ item }) => (
  <View style={styles.recipeCard}>
    <Image source={item.image} style={styles.UserImage} />
    <Text style={styles.userTitle}>{item.title}</Text>
    <Text style={styles.userName}>{item.owner}</Text>
  </View>
);

const RecipeCard = ({ item, handlePress }) => (
  <TouchableOpacity onPress={() => handlePress(item)} style={styles.recipeCardContainer}>
    <View style={styles.recipeCard}>
      <Image source={item.image} style={styles.recipeImage} />
      <StarRating rating={item.rating} />
      <Text style={styles.recipeTitle}>{item.title}</Text>
    </View>
  </TouchableOpacity>
);

const RecipeCards = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [addRecipeModal, setAddRecipeModal] = useState(false);
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    setMainData(userdata);
  }, []);

  const updateMainData = (newMainData) => {
    setMainData(newMainData);
  }

  const goAddRecipeScreen = () => {
    setAddRecipeModal(true);
  };
  
  const closeAddRecipeScreen = () => {
    setAddRecipeModal(false);
  };
  
  const handleRecipePress = (recipe) => {
    setSelectedRecipe(recipe);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedRecipe(null);
  };

  return (
    <>
      <View >
        <FlatList
          data={userdata}
          keyExtractor={(item) => item.id.toString()}
          numColumns={1}
          renderItem={({ item }) => <UserCard item={item} />} />
      </View>

      <ScrollView>
        <FlatList
          data={recipeList}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => <RecipeCard item={item} handlePress={handleRecipePress} />}
          contentContainerStyle={styles.recipeCardsContent} 
           />


        {/* Modal */}
        <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={closeModal}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>{selectedRecipe?.title}</Text>

      <Image source={selectedRecipe?.image} style={styles.recipeImage} />
      
      {/* Display ingredients vertically */}
      <View style={styles.ingredientsContainer}>
        <Text style={styles.modalTitle}>Ingredients:</Text>
        {selectedRecipe?.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.modalText}>{ingredient}</Text>
        ))}
      </View>
      
      {/* Display instructions in a box */}
      <Text style={styles.modalText}>Instructions:</Text>
      <View style={styles.instructionsContainer}>
        <ScrollView style={styles.instructionsScroll}>
          <Text style={styles.instructionsText}>{selectedRecipe?.description}</Text>
        </ScrollView>
      </View>
      
      {/* Display recipe image */}
      
      {/* Close button */}
      <Button title="Close" onPress={closeModal} style={styles.closeButton} />
    </View>
  </View>
</Modal>

      </ScrollView>
      <View style={styles.addRecipe}>
        <Pressable onPress={goAddRecipeScreen}>
          <View style={styles.addButton}>
            <Text style={styles.plus}>+</Text>
          </View>
        </Pressable>
      </View>

      <AddRecipeScreen
        visible={addRecipeModal}
        closeAddRecipe={closeAddRecipeScreen}
        maindata={mainData}
        setmaindata={updateMainData}
      />
    </>
  );
};


const styles = StyleSheet.create({
  // Your existing styles...
  recipeCardsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipeCardsContent: {
    flexGrow: 1, // Ensure content fills the container
    justifyContent: 'space-between', // Align cards evenly vertically
    alignItems: 'center', // Align cards to the center horizontally
    // paddingHorizontal: 5, // Add horizontal padding for spacing between cards
  },
  recipeCardContainer: {
    width: '45%', // Adjust width to fit two cards per row with some spacing
     // Ensure a square shape for each card
    margin: 5, // Add margin for spacing between cards
  },
  recipeCard: {
    flex: 0, // Change this to 0 to prevent the card from flexing and maintaining its original size
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f8f9fa', // Change this to your desired background color
    width: '100%', // Ensure the card takes up half of the container width when displayed in two columns
  },
  recipeImage: {
    width: '100%',
    height: 150, // Adjust the height as needed
    resizeMode: 'cover',
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 8,
    textAlign: 'center',
  },
  UserImage:{
    width: '100%',
    height: 200,
    opacity:0.5,
    resizeMode: 'cover',
    // borderRadius: 8, // Add border-radius for rounded corners
    marginBottom: 8, // Add some margin at the bottom for separation
    shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    shadowRadius: 4,
    
  },
  userTitle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height:'100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background
    color: '#fff', // White text color
    padding: 70,
    textAlign: 'center',
  },
  userName: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height:'100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background
    color: '#fff', // White text color
    padding: 90,
    textAlign: 'center',
  },

  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'left',
    fontWeight:"bold"
  },
  ingredientsContainer: {
    marginBottom: 20,
  },
  instructionsContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    minHeight: 100,
    width: '100%',
  },
  instructionsScroll: {
    flex: 1,
  },
  instructionsText: {
    fontSize: 16,
  },
  recipeImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  addRecipe: {
    // borderWidth: 1,
    margin: 10,
    height: 50,
    flexDirection: "row-reverse",
  },
  addButton: {
    height: 50,
    width: 50,
    // borderWidth:1,
    borderRadius: 100,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 15,
  },
  plus: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    // borderWidth:1,
    height: 40,
  },
});

export default RecipeCards;
