import recipesData from "../../recipes.json"; // Import recipes data

export const searchResults = (query: string): any[] => {
  const filteredResults = recipesData.filter((recipe: any) =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );
  // console.log(filteredResults);
  // return filteredResults.map((recipe: any) => recipe.title);
  return filteredResults
};
