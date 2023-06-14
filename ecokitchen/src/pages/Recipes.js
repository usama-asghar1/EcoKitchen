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
    setRecipe(data.meals.slice(0, 9));
  }


  return (
    <div>
      <input
        type="text"
        placeholder="Please input your main ingredient"
        onChange={(e) => setIngredient(e.target.value)}
      />
       <button onClick={fetchRecipe}>Search</button>
      {recipeData.length > 0 && (
        <div>
          {recipeData.map((recipe) => (
            <div key={recipe.idMeal}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <p>{recipe.strMeal}</p>
            </div>
          ))}
        </div>
      )}
     
    </div>
  );
}

export default Recipes;
