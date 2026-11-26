import { use, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRecipe from "../../hooks/useRecipe";
import Navbar from "../../components/Navbar/Navbar";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

function RecipeDetails() {
const {id} = useParams();
const {
  loadingById,
  recipeById,
  errorById,
  fetchRecipeById,
} = useRecipe();

useEffect(()=>{
fetchRecipeById(id);
},[id]);

console.log("ch",recipeById);
if(loadingById){
  return <Loading text="Recipedetails"/>
}
if(errorById){
  return <Error/>
}
  return<>
  <Navbar/>
        <h1>{recipeById.id}</h1>
        <h1>{recipeById.difficulty}</h1>
        <h1>{recipeById.name}</h1>
        <img src={recipeById.image}/>
  </>
  }

export default RecipeDetails;
