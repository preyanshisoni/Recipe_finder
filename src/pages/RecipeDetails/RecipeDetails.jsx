import { useParams } from "react-router-dom";

function RecipeDetails() {
const {id} = useParams();
console.log(id);
  return (
    <div>
      <h1>Detail Page:{id}</h1>
    </div>
  )
}

export default RecipeDetails;
