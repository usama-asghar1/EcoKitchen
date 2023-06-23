import React, { useState } from "react";
import "./KitchenFoodCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

function KitchenFoodCard({ name, quantity, image_url, expiry_date }) {
  const [updateQuantity, setUpdateQuantity] = useState(quantity);

  function decreaseQuantity() {
    setUpdateQuantity(updateQuantity - 1);

    
  }
 

  // Convert the input into a Date object
  var expiryDate = new Date(expiry_date);

  // Current date
  var currentDate = new Date();

  // Calculate the time difference in milliseconds
  var timeDiff = expiryDate.getTime() - currentDate.getTime();

  // Convert milliseconds to days
  var daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // Display the result
  console.log("Days left:", daysLeft);

  return (
    <div className="kitchen-food-card">
      <Card className="kitchen-food-card">
        <Card.Body className="d-flex align-items-center justify-content-left ">
          <div className="kitchen-food-card-image-container">
            <Image className="kitchen-card-image" src={image_url} alt={name} />
            <div className="quantity-count">{updateQuantity}</div>
          </div>
          <div className="kitchen-food-card-title-container">
            <Card.Title className="kitchen-card-title">{name}</Card.Title>
          </div>
          <div className="kitchen-food-card-expiry-container">
            <Card.Title className="kitchen-card-title">
            Days left: {daysLeft}
            </Card.Title>
          </div>

          <div className="kitchen-food-card-use-btns">
            {/* <Button
              className="kitchen-food-card-bought-btn kitchen-food-card-use-btn food-btn"
              onClick={decreaseQuantity}
              id="decreaseQuantity"
            >
              ✔
            </Button> */}
            <Button className="kitchen-food-card-delete-btn kitchen-food-card-use-btn food-btn"
             onClick={decreaseQuantity}
              id="decreaseQuantity"
              >
             ✔
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default KitchenFoodCard;
