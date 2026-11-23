
import axiosInstance from "../Api/AxiosInstance";

const RecipeServices = {

  getRecipes: async () => {
    const response = await axiosInstance.get("/recipes");
    console.log(response.data);
    return response.data;
  },

  getRecipeById : async(id)=>{
    const response = await axiosInstance.get(`/recipe/${id}`);
    console.log("response...", response);
    return response.data;
  }, 
  
  
}

export default RecipeServices;

