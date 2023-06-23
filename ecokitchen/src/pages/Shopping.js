//this is shopping list
import React, { useState, useEffect } from "react";
import ShoppingFoodCard from "../components/FoodCard/ShoppingFoodCard.js";
import { supabase } from "../components/supabase/supabaseClient.js";

function Shopping() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await supabase.auth.getUser();
      const user = response.data.user.id;
      console.log(user);

      const dataSB = await supabase
        .from("Shopping_List")
        .select("*")
        .eq("user_id", user);
      //convert from json to array
      // const object = await result.json();
      // const object2 = Object.values(object);
      //remove this console log before deployment
      setData(dataSB.data);
      console.log(dataSB.data);
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
