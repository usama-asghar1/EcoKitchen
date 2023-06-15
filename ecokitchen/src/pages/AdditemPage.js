import React, { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "./AdditemPage/AdditemPage.css";

import Wbread from "../assets/food/whitebread.jpg";
import Potatoe from "../assets/food/potatoes.jpg";
import Carrot from "../assets/food/carrot.jpg";
import Tomatoe from "../assets/food/tomatoe.jpg";
import Cabbage from "../assets/food/cabbage.jpg";
import Milk from "../assets/food/milk.jpg";
import Watermelon from "../assets/food/watermelon.jpg";
import Pear from "../assets/food/pear.jpg";
import Apple from "../assets/food/apple.jpg";

import Aubergine from "../assets/food/aubergine.jpg";
import Bagel from "../assets/food/bagel.jpg";
import Banana from "../assets/food/banana.jpg";
import Brocoli from "../assets/food/brocol.jpg";
import Bbread from "../assets/food/Brownbread.jpg";
import Grapes from "../assets/food/grapes (1).jpg";
import Lemon from "../assets/food/lemon.jpg";
import Lime from "../assets/food/lime.jpg";
import Cheese from "../assets/food/cheese.jpg";
// function Additem() {
//   return (
//     <div className="foodContainer">
<div className="foodItemContainer">
  <img className="foodimage" src={Wbread} />
  <img className="foodimage" src={Potatoe} />
  <img className="foodimage" src={Carrot} />
  <img className="foodimage" src={Tomatoe} />
  <img className="foodimage" src={Cabbage} />
  <img className="foodimage" src={Milk} />
  <img className="foodimage" src={Watermelon} />
  <img className="foodimage" src={Pear} />
  <img className="foodimage" src={Apple} />
  <img className="foodimage" src={Aubergine} />
  <img className="foodimage" src={Bagel} />
  <img className="foodimage" src={Banana} />
  <img className="foodimage" src={Brocoli} />
  <img className="foodimage" src={Bbread} />
  <img className="foodimage" src={Grapes} />
  <img className="foodimage" src={Lemon} />
  <img className="foodimage" src={Lime} />
  <img className="foodimage" src={Cheese} />

  {/* <h1>the from element</h1> */}
</div>;
//     </div>
//   );
// }

/*
PLAN:
1. Create a page that will allow users to add items to their fridge, pantry or shopping lists
- This will be differentiated via a toggle button at the top of the page 
- The toggle button will have 3 options: Fridge, Pantry, Shopping List
2. Create a form that will allow users to add items to their fridge, pantry or shopping lists
-In the fridge and pantry, the form will allow the user to add the name of the item, the quantity, the expiry date, cost of item and it's associated image
-In the shopping list, the form will allow the user to add the name of the item, the quantity and it's associated image
3. Create a button that will allow users to submit the form
-All fields must be filled in before the user can submit the form
-Once the user submits the form, the item will be added to the fridge, pantry or shopping list
-For now, we will not be using a database to store the information, so the information will be stored in the local storage. E.g. as an array of objects.
*/

const foodImages = [
  {
    className: "foodimage",
    src: Wbread,
    alt: "whitebread",
  },
  {
    className: "foodimage",
    src: Potatoe,
    alt: "potato",
  },
  {
    className: "foodimage",
    src: Carrot,
    alt: "carrot",
  },
  {
    className: "foodimage",
    src: Tomatoe,
    alt: "tomato",
  },
  {
    className: "foodimage",
    src: Cabbage,
    alt: "cabbage",
  },
];

function Additem() {
  const [searchTerm, setsearchTerm] = useState("");

  const handleChange = (event) => {
    // This edits the search term to remove any special characters and spaces
    const editedSearchTerm = event.target.value
      .replace(/[^a-zA-Z]/g, "")
      .toLowerCase();
    console.log(editedSearchTerm);
    setsearchTerm(editedSearchTerm);
  };

  const filteredImages = foodImages.filter((image) =>
    image.alt.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="add-item-container">
      <div className="add-item-form-container">
        <form className="add-item-form">
          <div className="add-item-form-title">
            <h1 className="page-title">Add Item</h1>
          </div>
          <div className="add-item-form-input">
            <label for="item-name">Item Name</label>
            <input
              onChange={handleChange}
              type="text"
              id="item-name"
              name="item-name"
            />
          </div>
          <div className="foodContainer">
            <div className="foodItemContainer add-item-form-input">
              {filteredImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="foodimage"
                />
              ))}
              {/* <img className="foodimage" src={Wbread} alt="whitebread" />
              <img className="foodimage" src={Potatoe} alt="potato" />
              <img className="foodimage" src={Carrot} alt="carrot" />
              <img className="foodimage" src={Tomatoe} alt="tomato" />
              <img className="foodimage" src={Cabbage} alt="potato" />
              <img className="foodimage" src={Milk} />
              <img className="foodimage" src={Watermelon} />
              <img className="foodimage" src={Pear} />
              <img className="foodimage" src={Apple} />
              <img className="foodimage" src={Aubergine} />
              <img className="foodimage" src={Bagel} />
              <img className="foodimage" src={Banana} />
              <img className="foodimage" src={Brocoli} />
              <img className="foodimage" src={Bbread} />
              <img className="foodimage" src={Grapes} />
              <img className="foodimage" src={Lemon} />
              <img className="foodimage" src={Lime} />
              <img className="foodimage" src={Cheese} /> */}

              {/* <h1>the from element</h1> */}
            </div>
          </div>
          <div className="add-item-form-input">
            <label for="item-quantity">Quantity</label>
            <input type="number" id="item-quantity" name="item-quantity" />
          </div>
          <div className="add-item-form-input">
            <label for="item-expiry">Expiry Date</label>
            <input type="date" id="item-expiry" name="item-expiry" />
          </div>
          <div className="add-item-form-input">
            <label for="item-cost">Cost (£)</label>
            <input type="number" id="item-cost" name="item-cost" />
          </div>
          <div className="add-item-form-input">
            <label for="item-image">Image</label>
            <input type="file" id="item-image" name="item-image" />
          </div>
          <div className="add-item-form-input">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Additem;
