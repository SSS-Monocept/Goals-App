import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StyleSheet, View, FlatList } from "react-native";

export default function App() {
  //Task 2: To manage the list of course goals
  const [courseGoals, setCourseGoals] = useState([]);
  const [goalCounter, setGoalCounter] = useState(0);

  //Task 1: to get the value enterd from the goalInputHandler to addGoalHandler.
  //Therefore, we need to store it as state, which is updated with every keystroke of goalInputHandler, so that we can use it at second fnction
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { id: goalCounter.toString(), text: enteredGoalText },
    ]);
    setGoalCounter((prevCounter) => prevCounter + 1);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => {
        return goal.id !== id;
      });
    });
  }

  return (
    <View style={styles.appContainer}>
      {/* 
      1. By defalut the parent container will only take the minimum amount of space required to hold the children 
      2. We need our parent to take the entire screen space 
      */}
      <GoalInput onAddGoal={addGoalHandler} />
      {/* Task 3: To display the course added course goals on the */}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
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
  goalsContainer: {
    flex: 6,
  },
});
