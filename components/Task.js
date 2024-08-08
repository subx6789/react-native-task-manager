import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Task({ text, onComplete }) {
  return (
    <View style={styles.items}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <TouchableOpacity style={styles.cross} onPress={onComplete}>
        <Text style={styles.crossText}>×</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  items: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    width: "90%",
  },
  itemText: {
    fontSize: 15,
  },
  cross: {
    width: 24,
    height: 24,
    backgroundColor: "red",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  crossText: {
    fontSize: 18,
    color: "#fff",
  },
});
