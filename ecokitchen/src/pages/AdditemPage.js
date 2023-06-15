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

import { Message } from "primereact/message";

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

// Dummy data for the food images
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
  {
    className: "foodimage",
    src: Milk,
    alt: "milk",
  },
  {
    className: "foodimage",
    src: Watermelon,
    alt: "watermelon",
  },
  {
    className: "foodimage",
    src: Pear,
    alt: "pear",
  },
  {
    className: "foodimage",
    src: Apple,
    alt: "apple",
  },
  {
    className: "foodimage",
    src: Aubergine,
    alt: "aubergine",
  },
  {
    className: "foodimage",
    src: Bagel,
    alt: "bagel",
  },
  {
    className: "foodimage",
    src: Banana,
    alt: "banana",
  },
  {
    className: "foodimage",
    src: Brocoli,
    alt: "broccoli",
  },
  {
    className: "foodimage",
    src: Bbread,
    alt: "brownbread",
  },
  {
    className: "foodimage",
    src: Grapes,
    alt: "grapes",
  },
  {
    className: "foodimage",
    src: Lemon,
    alt: "lemon",
  },
  {
    className: "foodimage",
    src: Lime,
    alt: "lime",
  },
  {
    className: "foodimage",
    src: Cheese,
    alt: "cheese",
  },
];


function Additem() {
  // This state will store the search term
  const [searchTerm, setsearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);

  // This function capitalises the first letter of each word in the search term
  const capitalizeWords = (input) => {
    return input
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  // This function handles the change in the search term
  const handleChange = (event) => {
    // This edits the search term to capitalises the first letter of each word in the search term
    const editedSearchTerm = capitalizeWords(event.target.value);
    console.log(editedSearchTerm);
    setsearchTerm(editedSearchTerm);
  };

  // This filters the food images based on the search term
  // It removes all special characters and spaces from the search term and the alt text of the images
  const filteredImages = foodImages.filter((image) =>
    image.alt
      .toLowerCase()
      .includes(searchTerm.replace(/[^a-zA-Z]/g, "").toLowerCase())
  );

  // This function handles the click of the food image
  const handleImageClick = (event) => {
    event.preventDefault();
    // This sets the selected image to the image that was clicked
    setSelectedImage(event.target.src);
    console.log(selectedImage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    if (selectedImage === null) {
      setError("Please select an image");
      return;
    }

    // Proceed with form submission
    // ...

  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();

   // Ensure month and day are in two-digit format
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    } 
 
   return `${year}-${month}-${day}`;

  }

  return (
    <div className="add-item-container">
      <div className="add-item-form-container">
        <form className="add-item-form" onSubmit={handleSubmit}>
          <div className="add-item-form-title">
            <h1 className="page-title">Add Item</h1>
          </div>
          <div className="add-item-form-input">
            <label htmlFor="item-name">Item Name</label>
            <input
              onChange={handleChange}
              type="text"
              id="item-name"
              name="item-name"
              required
            />
          </div>
          <div className="foodContainer">
            <div className="foodItemContainer add-item-form-input">
              {filteredImages.map((image, index) => (
               <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  // This adds the selected class to the image that was clicked
                  // This will allow us to style the selected image differently
                  className={`foodimage ${
                    selectedImage === image.src ? "selected" : ""
                  }`}
                  onClick={handleImageClick}
                />
                
              ))}
                            
            </div>
          </div>

          {error && <Message severity="error" text={error} />}

          <div className="add-item-form-input">
            <label htmlFor="item-quantity">Quantity</label>
            <input type="number" id="item-quantity" name="item-quantity" min="1" required />
          </div>
          <div className="add-item-form-input">
            <label htmlFor="item-expiry">Expiry Date</label>
            <input type="date" id="item-expiry"  name="item-expiry" min={getCurrentDate()} required/>
          </div>
          <div className="add-item-form-input">
            <label htmlFor="item-cost">Cost (£)</label>
            <input type="number" step="0.01" min="0" id="item-cost" name="item-cost" required />
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
