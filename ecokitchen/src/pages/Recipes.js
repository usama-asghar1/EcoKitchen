import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Recipes() {

  const [ingredient, setIngredient] = useState("");
  const [recipeData, setRecipe] = useState([]);
  const [error, setError] = useState(null);


  async function fetchRecipe() {
    setError(null);

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    console.log(response);

    const data = await response.json();
    console.log(data);
    setRecipe(data.meals);
  }


  return (
    <div>
      <input
        type="text"
        placeholder="Please input your address"
        onChange={(e) => setRecipe(e.target.value)}
      />
      {recipeData.length > 0 && <p>{recipeData[0].strMeal}</p>}
      <button onClick={fetchRecipe}>Fetch</button>
    </div>
  );
}

export default Recipes;
