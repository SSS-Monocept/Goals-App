import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    //I have replaced .key with .id beacuse key should't be passed as props
    //bind() is a js function that pre allows you to pre-configuer a function for future execution
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      {/* Enables tap to delted item */}
      <View style={styles.goalItem} key={props.id}>
        {/* Rounded corner does;t work directly on ios, for htat wrap the text
            within view */}
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
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
