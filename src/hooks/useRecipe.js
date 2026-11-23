import { useEffect, useState } from "react";
import RecipeServices from "../services/RecipeServices";

function useRecipe() {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRecipe = async () => {
    try {
      setLoading(false);
      setError("");
      const response = await RecipeServices.getRecipes();
      setRecipe(response.recipes);
    } catch (error) {
      setError("Failed to fetch data");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRecipe();
  }, []);

  return {
    recipe,
    loading,
    error,
    fetchRecipe,
  };
}
export default useRecipe;
