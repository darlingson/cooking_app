import React, { useEffect, useState } from 'react';
import { View,  FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Recipe from '../types/recipe';
import { Card, Text} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const onPressRecipe = (recipe: Recipe) => {
    navigation.navigate('RecipeDetails', { recipe });
  };

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
      <TouchableOpacity onPress={() => onPressRecipe(item)}>
      <Card>
      <Card.Content>
      <Text variant="titleLarge" style={styles.recipeTitle}>{item.title}</Text>
      <Text variant="bodyMedium" style={styles.recipeDescription}>{item.description}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>
      </TouchableOpacity>
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
