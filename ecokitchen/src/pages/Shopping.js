//this is shopping list
import React from "react";
import ShoppingFoodCard from "../components/FoodCard/ShoppingFoodCard.js";
import { foodImages } from "./AdditemPage.js";

function Shopping() {
  console.log(foodImages[0].alt);

  const foodShoppingCard = foodImages.map((foodItem) => {
    console.log(foodItem.src);
    return (
      <ShoppingFoodCard name={foodItem.alt} quantity={0} image={foodItem.src} />
    );
  });

  return <div>{foodShoppingCard}</div>;
}

export default Shopping;
