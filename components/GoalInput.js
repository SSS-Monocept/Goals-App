import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(" ");
  }

  return (
    //Modals are overlays that pop/slide up on the main screen, and allow u to take some action.
    //Aftert that t
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        {/* To add an image we are supposed to call require("Realative Path")
            We r currently in components folder => .. => to move up
            then move to assets => images => goal.png
        */}
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.images}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal !"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={"#f31282"} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color={"#b180f0"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5e0acc",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "80%",
    padding: 16,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
    width: "80%",
    justifyContent: "space-between",
  },
  button: {
    width: 100,
    borderRadius: 8,
    overflow: "hidden",
  },
  images: {
    width: 200,
    height: 200,
    margin: 50,
  },
});
