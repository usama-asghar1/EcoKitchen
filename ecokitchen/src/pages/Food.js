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

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [fridgeOrPantry]);
  /* eslint-enable react-hooks/exhaustive-deps */

  async function fetchData() {
    const dataSB = await supabase
      .from("food_items")
      .select("*")
      .eq("foodCategory", fridgeOrPantry)
      .order("expiryDate", { ascending: true });

    setData(dataSB.data);
    if (dataSB.error) {
      setFetchError(dataSB.error);
    }
  }

  async function decreaseQuantity(foodID) {
    const item = data.find((item) => item.id === foodID);
    item.quantity -= 1;

    await supabase
      .from("food_items")
      .update({ quantity: item.quantity })
      .eq("id", foodID);

    fetchData();
  }

     /* Waste Button 
    * - if the quantity is above 0, decrease the quantity by 1 and move the record to wasted_items
    * - if the quantity is 0, move the record to wasted_items and delete the record from food_items
    * - if quantity is less than 0 (expired) move the record to wasted_items and delete the record from food_items
    */

  async function moveToWasted(foodID) {
    if (data && data.length > 0) {
      const [foodItem] = data;
      
     console.log(foodItem);

      if (foodItem.quantity === 1) 
       {
        await supabase.from("wasted_items").insert([foodItem]);
        await supabase.from("food_items").delete().eq("id", foodID);
        console.log("Record deleted and moved to wasted_items");
      }
      else if (foodItem.quantity > 1) {
        decreaseQuantity(foodID);
        await supabase.from("wasted_items").insert([foodItem]);
        console.log("wasted 1 and decreased quantity by 1");
      }

    else {
      console.log("Data not available");

      fetchData();

    }
  }
  }

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
        decreaseQuantity={decreaseQuantity}
        foodID={foodItem.id}
        moveToWasted={moveToWasted}
      />
    );
  });
  console.log(foodItemCard);

  return (
    <div>
      <div>
       
      </div>
      <div className="button-list-container">
        <Button
          id="pantry-button"
          label="Pantry"
          type="button"
          onClick={PantryToggle}
          className={fridgeOrPantry === "pantryArray" ? "selected" : "not-selected"}
        />
        <Button
          id="fridge-button"
          label="Fridge"
          type="button"
          onClick={FridgeToggle}
          className={fridgeOrPantry === "fridgeArray" ? "selected" : "not-selected"}
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
