import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enterdGoalText, setEnteredGoalState] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalState(enteredText);
  }
  //Task 1: to get the value enterd from the goalInputHandler to addGoalHandler.
  //Therefore, we need to store it as state, which is updated with every keystroke of goalInputHandler, so that we can use it at second fnction
  function addGoalHandler() {
    console.log(enterdGoalText);
  }

  return (
    <View style={styles.appContainer}>
      {/* 
      1. By defalut the parent container will only take the minimum amount of space required to hold the children 
      2. We need our parent to take the entire screen space 
      */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal !"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, //Enables the outter/parent container to take all the available screeen
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 6,
  },
});
