import Navbar from "../../components/Navbar/Navbar";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import useRecipe from "../../hooks/useRecipe";
import "./Home.css";


function Home() {
  const {recipe, loading, error} = useRecipe();

  if (loading) {
    return <div className="recipe-status">Loading recipes...</div>;
  }

  if (error) {
    return <div className="recipe-status recipe-error">{error}</div>;
  }

  return<>
    <Navbar/>
    <section className="recipes-section">

      <div className="recipes-header">
        <div>
          <span className="recipes-subtitle">DISCOVER YOUR NEXT MEAL</span>
          <h1>Explore Delicious Recipes</h1>
          <p>Find inspiration for your next cooking adventure.</p>
        </div>

        <span className="recipes-count">
          {recipe.length} Recipes
        </span>
      </div>

      {recipe.length === 0 ? (
        <p className="recipe-status">No recipes found.</p>
      ) : (
        <div className="recipes-grid">
          {recipe.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      )}

    </section>
    </>
}

export default Home;
