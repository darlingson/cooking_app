// RecipeList.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Recipe from '../types/recipe'; // Import the Recipe interface

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // Function to load recipes from JSON file
    const loadRecipes = async () => {
      try {
        const response = await require('../../recipes.json'); // Load JSON file
        setRecipes(response); // Set recipes state
      } catch (error) {
        console.error('Error loading recipes:', error);
      }
    };

    // Call the function to load recipes on component mount
    loadRecipes();
  }, []);

  const renderRecipeItem = ({ item }: { item: Recipe }) => (
    <View style={styles.recipeItem}>
      <Text style={styles.recipeTitle}>{item.title}</Text>
      <Text style={styles.recipeDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <FlatList
        data={recipes}
        renderItem={renderRecipeItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  recipeItem: {
    marginBottom: 16,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  recipeDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default RecipeList;
