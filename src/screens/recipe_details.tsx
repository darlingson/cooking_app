import { StyleSheet, View, Text, ScrollView } from "react-native";
import { RouteProp } from "@react-navigation/native";
import PagerView from "react-native-pager-view";
import Recipe from "../types/recipe";
import IngredientComponent from "../components/ingredient_component";
import CookingInstructionComponent from "../components/cooking_instruction_component";

type RootStackParamList = {
  RecipeDetails: {
    recipe: Recipe;
  };
};

type RecipeDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "RecipeDetails"
>;

interface RecipeDetailsScreenProps {
  route: RecipeDetailsScreenRouteProp;
}

export const RecipeDetailsScreen: React.FC<RecipeDetailsScreenProps> = ({
  route,
}) => {
  const { recipe } = route.params;
  return (
    <View style={styles.container}>
      <PagerView style={styles.pager} initialPage={0}>
        {/* Page 1: Recipe Details */}
        <ScrollView style={styles.page} key={0}>
          <Text style={styles.title}>{recipe.title}</Text>
          <Text style={styles.description}>{recipe.description}</Text>
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Nutritional Information:</Text>
            <Text>Calories: {recipe.nutritionalInformation.calories}</Text>
            <Text>Fat: {recipe.nutritionalInformation.fat}g</Text>
            <Text>Protein: {recipe.nutritionalInformation.protein}g</Text>
            <Text>Carbohydrates: {recipe.nutritionalInformation.carbohydrates}g</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Ingredients:</Text>
            {recipe.ingredients.map((ingredient, index) => (
            //   <Text key={index}>{ingredient}</Text>
              <IngredientComponent key={index} ingredient={ingredient} />
            ))}
          </View>
        </ScrollView>

        {/* Page 2: Cooking Instructions */}
        <View style={styles.page} key={1}>
          <Text style={styles.title}>Cooking Instructions</Text>
          {recipe.instructions.map((instruction, index) => (
            // <Text key={index}>{instruction}</Text>
            <CookingInstructionComponent key={index} instruction={instruction} />
          ))}
        </View>
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pager: {
    flex: 1,
  },
  page: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});
