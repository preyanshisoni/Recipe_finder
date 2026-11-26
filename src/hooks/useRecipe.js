import { useEffect, useState } from "react";
import RecipeServices from "../services/RecipeServices";

function useRecipe() {
  const [recipe, setRecipe] = useState([]);
  const [recipeById, setRecipeById] = useState([]);

  const [error, setError] = useState("");
  const [errorById, setErrorById] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [loadingById, setLoadingById] = useState(false);

  const fetchRecipe = async () => {
    try {
      setLoading(true);
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

  const fetchRecipeById = async (id)=>{
    try{
      setLoadingById(true);
      setError("");
      const response = await RecipeServices.getRecipeById(id);
      console.log("response of getbyId", response);
      setRecipeById(response);
    }catch(error){
      setErrorById("Failed to fetch error");
      console.log(error);
    }
    finally{
      setLoadingById(false);
    }
  }
  useEffect(() => {
    fetchRecipe();
  }, []);

  return {
    recipe,
    loading,
    error,
    fetchRecipe,
    fetchRecipeById,
    loadingById,
    recipeById,
    errorById
  };
}
export default useRecipe;
