
import { Clock, Star, ChefHat, Heart } from "lucide-react";
import "./RecipeCard.css";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  const viewRecipe = (id)=>{
      navigate(`/recipe/${id}`);
  }
  
  return (
    <div className="recipe-card">

      {/* Recipe Image */}
      <div className="recipe-card__image-wrapper">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="recipe-card__image"
          loading="lazy"
        />

        <button
          className="recipe-card__favorite"
          aria-label="Add to favorites"
        >
          <Heart size={19} />
        </button>

        <span className="recipe-card__difficulty">
          {recipe.difficulty}
        </span>
      </div>

      {/* Recipe Content */}
      <div className="recipe-card__content">

        <div className="recipe-card__top">
          <span className="recipe-card__cuisine">
            {recipe.cuisine}
          </span>

          <span className="recipe-card__rating">
            <Star size={15} fill="currentColor" />
            {recipe.rating}
          </span>
        </div>

        <h3 className="recipe-card__title">
          {recipe.name}
        </h3>

        <div className="recipe-card__meta">

          <span>
            <Clock size={16} />
            {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
          </span>

          <span>
            <ChefHat size={16} />
            {recipe.servings} servings
          </span>

        </div>

        <button onClick={()=>viewRecipe(recipe.id)} className="recipe-card__button">
          View Recipe
        </button>

      </div>
    </div>
  );
}

export default RecipeCard;
