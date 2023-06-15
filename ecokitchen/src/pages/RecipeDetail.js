import { useState, useEffect } from "react";
import Recipes from "./Recipes";
import { useLocation, useParams } from "react-router-dom";

/* PLAN

1. On ReceipeDetail.js 
Create the receipe deatil page:
- Send down ID of the receipe from the receipe.js as a props 
- Use it to fetch again with a different endpoint

2.  On Receipes.js 
Create the route from the receipe search page to deatil page:
- When user clicks on the receipe image, it will pass down the ID of that recipe
- And take them to receipe detail page according to that ID

3. On ReceipeDetail.js 
- Set a state to take in ID, initially as null.
- Display the following data from the API:
(a) ID "idMeal"
(b) title "strMeal"
(c) "strInstructions"
(d) ingredients "strIngredient1" to "strIngredient20" (with map, if it is null/empty, then ignore it)
(e) measurement "strMeasure1" to "strMeasure20 (with map, if it is null/empty, then ignore it)
(f) image "strMealThumb"

4. On ReceipeDetail.js
- Use the selected receipe data to display the detail of that receipe

*/

function RecipeDetail() {
  // need ot come back to this
  const { dave } = useParams();
  const location = useLocation();
  const { id } = location.state;
  const mealId = id;
  const [selectedRecipeData, setSelectedRecipe] = useState(null);
  console.log(id);

  useEffect(() => {
    async function fetchSelectedRecipe() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      console.log(response);

      const data = await response.json();
      console.log(data);

      setSelectedRecipe(data);
      console.log(selectedRecipeData);
    }

    fetchSelectedRecipe();
  }, []);

  console.log("After the useEffect");
  console.log(selectedRecipeData);

  if (!selectedRecipeData) {
    return <div>Loading...</div>;
  }

  function listOfIngredient() {
    //loop through the object and list all ingredients in an array
    const meal = selectedRecipeData.meals[0];
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      } else {
        break;
      }
    }
    return ingredients;
  }
  const list = listOfIngredient();
  //   console.log(`${list}`);

  function listOfMeasurement() {
    //loop through the object and list all measurements in an array
    const meal = selectedRecipeData.meals[0];
    const measurements = [];

    for (let i = 1; i <= 20; i++) {
      const measurement = meal[`strMeasure${i}`];
      if (measurement) {
        measurements.push(measurement);
      } else {
        break;
      }
    }
    return measurements;
  }

  const measurements = listOfMeasurement();

  return (
    <div className="recipe-detail-container">
      {/* <h1>ID: {selectedRecipeData.meals[0].idMeal}</h1> */}
      <h3 className="recipe-title">{selectedRecipeData.meals[0].strMeal}</h3>
      <img
        className="recipe-card-img"
        src={selectedRecipeData.meals[0].strMealThumb}
        alt={selectedRecipeData.meals[0].strMeal}
      />
      <p className="recipe-instructions">
        {selectedRecipeData.meals[0].strInstructions}
      </p>
      <h3>Ingredients:</h3>
      <ul>
        {list.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </ul>

      <div>
        <h3>measurements</h3>
        <ul>
          {measurements.map((measurement, index) => {
            return <li key={index}>{measurement}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default RecipeDetail;
