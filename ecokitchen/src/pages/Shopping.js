//this is shopping list
import React, { useState, useEffect } from "react";
import ShoppingFoodCard from "../components/FoodCard/ShoppingFoodCard.js";
import { supabase } from "../components/supabase/supabaseClient.js";

import { Message } from "primereact/message";

function Shopping() {
  const [data, setData] = useState([]);
  const [emptyshoppinglist, setEmptyShoppingList] = useState(false);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    fetchData();
  }, [emptyshoppinglist]);

  /* eslint-disable react-hooks/exhaustive-deps */

  async function fetchData() {
    const response = await supabase.auth.getUser();
    const user = response.data.user.id;

    const dataSB = await supabase
      .from("Shopping_List")
      .select("*")
      .eq("user_id", user);

    setData(dataSB.data);
  
    if (data.length === 0) {
      setEmptyShoppingList(true);
    } else {
      setEmptyShoppingList(false);
    }
  }

  // Function to increase the quantity of a food item
  async function increaseQuantity(foodID) {
    // Find the index of the food item with the given ID in the state
    let itemIndex = -1; // Start by assuming the item is not found
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === foodID) {
        itemIndex = i; // Set the index if the item is found
        break; // Exit the loop early since we found the item
      }
    }

    // If the item is not found, exit the function
    if (itemIndex === -1) {
      return;
    }

    // Clone the item from the state and increase its quantity
    const updatedItem = {
      ...data[itemIndex],
      quantity: data[itemIndex].quantity + 1,
    };

    // Update the quantity in the database
    await supabase
      .from("Shopping_List")
      .update({ quantity: updatedItem.quantity })
      .eq("id", foodID);

    // Clone the entire state
    const updatedData = [...data];
    // Replace the old item with the updated item
    updatedData[itemIndex] = updatedItem;
    // Update the state
    setData(updatedData);
  }

  // Function to decrease the quantity of a food item
  async function decreaseQuantity(foodID) {
    // Find the index of the food item with the given ID in the state
    let itemIndex = -1; // Start by assuming the item is not found
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === foodID) {
        itemIndex = i; // Set the index if the item is found
        break; // Exit the loop early since we found the item
      }
    }

    // If the item is not found, exit the function
    if (itemIndex === -1) return;

    // If the quantity is already 0, do nothing
    // We want this to happen since the user can keep common items in their shopping list
    if (data[itemIndex].quantity === 0) {
      return;
    }

    // Clone the item from the state and decrease its quantity
    const updatedItem = {
      ...data[itemIndex],
      quantity: data[itemIndex].quantity - 1,
    };

    // Update the quantity in the database
    await supabase
      .from("Shopping_List")
      .update({ quantity: updatedItem.quantity })
      .eq("id", foodID);

    // Clone the entire state
    const updatedData = [...data];
    // Replace the old item with the updated item
    updatedData[itemIndex] = updatedItem;
    // Update the state
    setData(updatedData);
  }

  // Function to delete a food item from the list
  async function deleteFood(foodID) {
    // Delete the food item from the database
    await supabase.from("Shopping_List").delete().eq("id", foodID);

    // Filter out the deleted item from the state
    const updatedData = data.filter((item) => item.id !== foodID);

    // Update the state /
    setData(updatedData);
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
      {emptyshoppinglist ? (
        <div className="no-wasted-items">
          <Message
            type="warning"
            severity="info"
            text="Your shopping list is empty"
          />
        </div>
      ) : (
        <div className="shopping-page-container">{foodShoppingCard}</div>
      )}
    </div>
  );
}

export default Shopping;
