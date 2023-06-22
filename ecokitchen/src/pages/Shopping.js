//this is shopping list
import React, { useState, useEffect } from "react";
import ShoppingFoodCard from "../components/FoodCard/ShoppingFoodCard.js";
import { supabase } from "../components/supabase/supabaseClient.js";

function Shopping() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const dataSB = await supabase.from("Shopping_List").select("*");
      //convert from json to array
      // const object = await result.json();
      // const object2 = Object.values(object);
      setData(dataSB.data);
      console.log(data);
    }

    fetchData();
  }, []);

  const foodShoppingCard = data.map((foodItem) => {
    return (
      <ShoppingFoodCard
        key={foodItem.id}
        name={foodItem.name}
        quantity={foodItem.quantity}
        image_url={foodItem.image_url}
      />
    );
  });

  return (
    <div>
      <div>{foodShoppingCard}</div>
    </div>
  );
}

export default Shopping;
