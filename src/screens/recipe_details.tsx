import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, ScrollView, Button, Pressable } from "react-native";
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
  const [pageIndex, setPageIndex] = useState(0);
  const pagerRef = useRef<PagerView>(null);

  const handleNextPage = () => {
    if (pagerRef.current && pageIndex < 1) {
      pagerRef.current.setPage(pageIndex + 1);
      setPageIndex(pageIndex + 1);
    }
  };

  const handlePrevPage = () => {
    if (pagerRef.current && pageIndex > 0) {
      pagerRef.current.setPage(pageIndex - 1);
      setPageIndex(pageIndex - 1);
    }
  };

  const renderIndicators = () => {
    return (
      <View style={styles.indicatorContainer}>
        <View
          style={[
            styles.indicator,
            pageIndex === 0 ? styles.activeIndicator : styles.inactiveIndicator,
          ]}
        />
        <View
          style={[
            styles.indicator,
            pageIndex === 1 ? styles.activeIndicator : styles.inactiveIndicator,
          ]}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <PagerView
        ref={pagerRef}
        style={styles.pager}
        initialPage={0}
        onPageSelected={(e) => setPageIndex(e.nativeEvent.position)}
      >
        {/* Page 1: Recipe Details */}
        <ScrollView style={styles.page} key={0}>
          <Text style={styles.title}>{recipe.title}</Text>
          <Text style={styles.description}>{recipe.description}</Text>
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Nutritional Information:</Text>
            <Text>Calories: {recipe.nutritionalInformation.calories}</Text>
            <Text>Fat: {recipe.nutritionalInformation.fat}g</Text>
            <Text>Protein: {recipe.nutritionalInformation.protein}g</Text>
            <Text>
              Carbohydrates: {recipe.nutritionalInformation.carbohydrates}g
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Ingredients:</Text>
            {recipe.ingredients.map((ingredient, index) => (
              <IngredientComponent key={index} ingredient={ingredient} />
            ))}
          </View>
        </ScrollView>

        {/* Page 2: Cooking Instructions */}
        <View style={styles.page} key={1}>
          <Text style={styles.title}>Cooking Instructions</Text>
          {recipe.instructions.map((instruction, index) => (
            <CookingInstructionComponent
              key={index}
              instruction={instruction}
            />
          ))}
        </View>
      </PagerView>
      <View style={styles.buttonContainer}>
        {/* <Button title="<" onPress={handlePrevPage} /> */}
        {renderIndicators()}
        {/* <Button title=">" onPress={handleNextPage} /> */}
      </View>
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
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  indicator: {
    width: 30,
    height: 5,
    marginHorizontal: 5,
    borderRadius: 2.5,
  },
  activeIndicator: {
    backgroundColor: "blue",
  },
  inactiveIndicator: {
    backgroundColor: "gray",
  },
});
