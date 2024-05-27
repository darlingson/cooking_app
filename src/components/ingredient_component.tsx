import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function IngredientComponent(props: { ingredient: string }) {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted((prevCompleted) => !prevCompleted);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCompleted}>
        <Card
        >
          <Card.Content           style={styles.content}>
            {/* <Text>{props.ingredient}</Text> */}
            <Text style={styles.text}>{props.ingredient}</Text>
            {completed && (
              <AntDesign name="checkcircle" size={24} color="black" />
            )}
            {!completed && (
              <AntDesign name="checkcircleo" size={24} color="black" />
            )}
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    borderColor: "#ddd",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    textAlign: "left",
    flexWrap: "wrap",
    flexShrink: 1,
    width: "100%",
    maxWidth: "90%",
  },
});
