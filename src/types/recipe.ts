interface Recipe {
    title: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    difficultyLevel: 'Easy' | 'Moderate' | 'Difficult';
    preparationTime: string;
    cookingTime: string;
    totalTime: string;
    servings: number;
    cuisine: string;
    dietaryRestrictions: string[];
    nutritionalInformation: {
      calories: number;
      fat: number;
      protein: number;
      carbohydrates: number;
    };
    allergens: string[];
    image: string;
  }
  
  export default Recipe;
  