//this is food

import "../App.css";
import { useState, useEffect } from "react";
import { supabase } from "../components/supabase/supabaseClient";

function Food() {
  const [fetchError, setFetchError] = useState(null);
  const [food, setFood] = useState(null);

  useEffect(() => {
    const fetchFood = async () => {
      const { data, error } = await supabase.from("food_items").select("*");

      console.log(data);

      if (error) {
        setFetchError("Could not fetch food items");
        setFood(null);
        console.log(error);
      }
      if (data) {
        setFood(data);
        setFetchError(null);
      }
    };

    fetchFood();
  }, []);

  return (
    <div className="food-page">
      <p>This is the Food Page</p>
      {fetchError && <p>{fetchError}</p>}
      {food && (
        <div className="food">
          {food.map((food) => (
            <p>{food.selectedFoodName}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Food;
