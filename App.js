import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalState] = useState("");
  //Task 2: To manage the list of course goals
  const [courseGoals, setCourseGoals] = useState([]);
  const [goalCounter, setGoalCounter] = useState(0);

  function goalInputHandler(enteredText) {
    setEnteredGoalState(enteredText);
  }
  //Task 1: to get the value enterd from the goalInputHandler to addGoalHandler.
  //Therefore, we need to store it as state, which is updated with every keystroke of goalInputHandler, so that we can use it at second fnction
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { key: goalCounter.toString(), text: enteredGoalText },
    ]);
    setGoalCounter((prevCounter) => prevCounter + 1);
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
      {/* Task 3: To display the course added course goals on the */}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem} key={itemData.item.key}>
                {/* Rounded corner does;t work directly on ios, for htat wrap the text
            within view */}
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
        />
        {/* 
        Disadvantage of ScrollView : it renders all its child items in the beginnging itself.
        Even for the elemnts that are currently not visible on the screen.
        Use Scrollview only when there is less content to scroll
         */}
        {/* Therefore we uses Flatlist for scrolling, renders only those items that are currently on the screen, for rest lazyloading
        We now dont map our data manually, for flatlist*/}
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
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
