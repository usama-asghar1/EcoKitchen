//this is shopping list
import React from "react";
import ShoppingFoodCard from "../components/FoodCard/ShoppingFoodCard.js";
import { foodImages } from "./AdditemPage.js";

function Shopping() {
  console.log(foodImages[0].alt);
  return (
    <div>
      <ShoppingFoodCard />
    </div>
  );
}

export default Shopping;
