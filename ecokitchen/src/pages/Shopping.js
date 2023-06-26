//this is shopping list
import React, { useState, useEffect } from "react";
import ShoppingFoodCard from "../components/FoodCard/ShoppingFoodCard";
import { supabase } from "../components/supabase/supabaseClient.js";

function Shopping() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await supabase.auth.getUser();
    const user = response.data.user.id;

    const dataSB = await supabase
      .from("Shopping_List")
      .select("*")
      .eq("user_id", user);
  
    setData(dataSB.data);
    console.log(dataSB.data);
  }

  async function increaseQuantity(foodID) {
    const item = data.find((item) => item.id === foodID);
    item.quantity += 1;

    await supabase
      .from("Shopping_List")
      .update({ quantity: item.quantity })
      .eq("id", foodID);

    fetchData();
  }

  async function decreaseQuantity(foodID) {
    const item = data.find((item) => item.id === foodID);

    // if quantity is 0, do nothing
    // We want this to happen since the user can keep common items in their shopping list
    if (item.quantity === 0) {
      return;
    }

    item.quantity -= 1;

    await supabase
      .from("Shopping_List")
      .update({ quantity: item.quantity })
      .eq("id", foodID);

    fetchData();
  }

  async function deleteFood(foodID) {
    await supabase.from("Shopping_List").delete().eq("id", foodID);
    fetchData();
  }

  const foodShoppingCard = data.map((foodItem) => {
    return (

  
      <ShoppingFoodCard
        key={foodItem.id}
        foodID={foodItem.id}
        name={foodItem.name}
        quantity={foodItem.quantity}
        image_url={foodItem.image_url}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        deleteFood={deleteFood}
      />
    );
  });

  return (
    <div>
      <div>
        <h1 className="page-title">Shopping List</h1>
      </div>
      <div>{foodShoppingCard}</div>
    </div>
  );
}

export default Shopping;
