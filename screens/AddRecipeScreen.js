import { useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  rating
} from "react-native";
import { addRecipe, data } from "../UsersData";

const AddRecipeScreen = ({
  visible,
  maindata,
  setmaindata,
  closeAddRecipe,
}) => {
  const [name, setName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingreList, setIngreList] = useState([]);
  const [ingre, setIngre] = useState("");
  const [rating, setRating] = useState(3);
  const [imgpath, setImgPath] = useState(
    // require("../assets/images/Biryani.jpeg")
  );

  // console.log(maindata);

  const nameChangeHandler = (text) => {
    setName(text);
  };

  const instructionChangeHandler = (instr) => {
    setInstructions(instr);
  };

  const ingreChangeHandler = (ingre) => {
    setIngre(ingre);
  };

  const addIngreHandler = () => {
    setIngreList((currList) => [
      ...currList,
      { key: Math.random() * 100000, name: ingre },
    ]);
    setIngre("");
  };

  const deleteIngreHandler = (ingreid) => {
    // console.log(ingreid);
    setIngreList((currList) => {
      return currList.filter((ele) => ele.key !== ingreid);
    });
  };

  const addToMainData = (newRecipeData) => {
    setmaindata((currMaindata) => [...currMaindata, newRecipeData]);

    closeAddRecipe();
  };

  const saveRecipeHandler = () => {
    console.log("Recipe Added Successfully");

  // Show the pop-up message
  Alert.alert(
    "Success",
    "Recipe added successfully!",
    [{ text: "OK", onPress: () => console.log("OK Pressed") }]
  );
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.mainCont}>
        <View style={styles.closeMainContainer}>
        <View style={styles.closeContainer}>
          <Pressable onPress={closeAddRecipe}>
            <View style={styles.close}>
              <Text style={styles.cross}>×</Text>
            </View>
          </Pressable>
        </View>

        </View>
        
        <View style={styles.title}>
          <Text style={styles.titleText}>Add Recipe</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.name}>
            <TextInput
              value={name}
              onChangeText={nameChangeHandler}
              style={styles.nameInput}
              placeholder="Name"
            />
          </View>
          <View style={styles.instruction}>
            <Text style={styles.instructionText}>Enter the Instructions</Text>
            <TextInput
              value={instructions}
              onChangeText={instructionChangeHandler}
              style={styles.instructionInput}
            />
          </View>
          <View style={styles.ingredients}>
            <TextInput
              style={styles.ingredientsText}
              placeholder="Enter the Ingredients"
              onChangeText={ingreChangeHandler}
              value={ingre}
            />
            {/* <Text style={styles.ingredientsText}>Enter the Ingredients</Text> */}
            <Pressable onPress={addIngreHandler}>
              <View style={styles.addIngred}>
                <View style={styles.addButton}>
                  <Text style={styles.plus}>+</Text>
                </View>
              </View>
            </Pressable>
          </View>
          <View style={styles.ingreListCont}>
            {ingreList.length > 0 && (
              <FlatList
                data={ingreList}
                numColumns={2}
                renderItem={({ item: { name, key }, index }) => (
                  <Pressable onPress={() => deleteIngreHandler(key)}>
                    <View style={styles.ingreItemCont}>
                      <Text style={styles.ingreItemText}>{name}</Text>
                    </View>
                  </Pressable>
                )}
              />
            )}
          </View>
        </ScrollView>
        <View style={styles.saveCont}>
          <Pressable onPress={saveRecipeHandler}>
            <View style={styles.saveButton}>
              <Text style={styles.saveText}>Save</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>

  );
};

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  closeMainContainer: {
    alignItems: 'flex-end',
  },
  closeContainer: {
    marginRight: -10,
    marginTop: -10,
  },
  close: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cross: {
    fontSize: 20,
    color: '#333',
  },
  title: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  name: {
    marginBottom: 20,
  },
  nameInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  instruction: {
    marginBottom: 20,
  },
  instructionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  instructionInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    minHeight: 100,
  },
  ingredients: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ingredientsText: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
  addIngred: {
    marginLeft: 10,
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    fontSize: 24,
    color: '#fff',
  },
  ingreListCont: {
    marginBottom: 20,
  },
  ingreItemCont: {
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  ingreItemText: {
    fontSize: 16,
  },
  saveCont: {
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  saveText: {
    fontSize: 18,
    color: '#fff',
  },
  
});


export default AddRecipeScreen;