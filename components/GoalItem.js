import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    //I have replaced .key with .id beacuse key should't be passed as props
    //bind() is a js function that pre allows you to pre-configuer a function for future execution

    <View style={styles.goalItem} key={props.id}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        {/* Rounded corner does;t work directly on ios, for htat wrap the text
            within view */}
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
