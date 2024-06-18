import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
  return (
    //I have replaced .key with .id beacuse key should't be passed as props
    <View style={styles.goalItem} key={props.id}>
      {/* Rounded corner does;t work directly on ios, for htat wrap the text
            within view */}
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
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
