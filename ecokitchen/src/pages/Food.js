//this is food
import KitchenFoodCard from "../components/KitchenFoodCard/KitchenFoodCard.js";

import "../App.css";
import { useState, useEffect } from "react";
import { supabase } from "../components/supabase/supabaseClient";
import { Button } from "primereact/button";

function Food() {
  const [fetchError, setFetchError] = useState(null);
  const [data, setData] = useState([]);
  const [fridgeOrPantry, setFridgeOrPantry] = useState("pantryArray");

  useEffect(() => {
    async function fetchData() {
      const dataSB = await supabase
        .from("food_items")
        .select("*")
        .eq("foodCategory", fridgeOrPantry);

      setData(dataSB.data);
      if (dataSB.error) {
        setFetchError(dataSB.error);
      }
    }

    fetchData();
  }, [fridgeOrPantry]);
  async function FridgeToggle() {
    setFridgeOrPantry("fridgeArray");
    console.log(fridgeOrPantry);
  }
  async function PantryToggle() {
    setFridgeOrPantry("pantryArray");
    console.log(fridgeOrPantry);
  }

  const foodItemCard = data.map((foodItem) => {
    return (
      <KitchenFoodCard
        key={foodItem.id}
        name={foodItem.selectedFoodName}
        quantity={foodItem.quantity}
        image_url={foodItem.selectedImage}
        expiry_date={foodItem.expiryDate}
      />
    );
  });
  console.log(foodItemCard);

  // const [food, setFood] = useState(null);

  // useEffect(() => {
  //   const fetchFood = async () => {
  //     const { data, error } = await supabase.from("food_items").select("*");

  //     console.log(data);

  //   fetchFood();
  // }, []);

  return (
    <div>
      <div>
        <h1 className="page-title">Food in your</h1>
      </div>
      <div className="button-list-container">
        <Button
          id="pantry-button"
          label="Pantry"
          type="button"
          onClick={PantryToggle}
          className={fridgeOrPantry === "pantryArray" ? "" : "not-selected"}
        />
        <Button
          id="fridge-button"
          label="Fridge"
          type="button"
          onClick={FridgeToggle}
          className={fridgeOrPantry === "fridgeArray" ? "" : "not-selected"}
        />
      </div>
      {fetchError && <p>{fetchError}</p>}
      <div>
        <div>{foodItemCard}</div>
      </div>
    </div>
  );
}

export default Food;
