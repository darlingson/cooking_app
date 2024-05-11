import { View, Text } from "react-native";
import { RouteProp } from '@react-navigation/native';
import Recipe from '../types/recipe';
type RootStackParamList = {
    RecipeDetails: {
        recipe: Recipe;
    };
};

type RecipeDetailsScreenRouteProp = RouteProp<RootStackParamList, 'RecipeDetails'>;

interface RecipeDetailsScreenProps {
    route: RecipeDetailsScreenRouteProp;
}
export const RecipeDetailsScreen: React.FC<RecipeDetailsScreenProps> = ({ route }) => {
    const { recipe } = route.params;
    return (
        <View>
            <Text>Recipe Details Screen</Text>
            <Text>{recipe.title}</Text>
            <Text>{recipe.description}</Text>
        </View>
    );
}