import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Recipe from '../types/recipe';

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const response = await require('../../recipes.json');
        setRecipes(response);
      } catch (error) {
        console.error('Error loading recipes:', error);
      }
    };

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
