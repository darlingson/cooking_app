import { Text, View } from "react-native";
import RecipeList from "../components/recipeList";
import { StatusBar } from "expo-status-bar";

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      <RecipeList />
    </View>
  );
};
