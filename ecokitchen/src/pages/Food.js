//this is food
import KitchenFoodCard from "../components/KitchenFoodCard/KitchenFoodCard.js";

import "../App.css";
import { useState, useEffect } from "react";
import { supabase } from "../components/supabase/supabaseClient";

function Food() {
  const [fetchError, setFetchError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const dataSB = await supabase.from("food_items").select("*");
      setData(dataSB.data);
      if (dataSB.error) {
      setFetchError(dataSB.error);
      }
    }

    fetchData();
  }, []);

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
      <p>This is the Food Page</p>
      {fetchError && <p>{fetchError}</p>}
      <div>
        <div>{foodItemCard}</div>
      </div>
    </div>
  );
}

export default Food;
