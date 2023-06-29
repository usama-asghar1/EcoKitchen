import React from "react";
import "./KitchenFoodCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { BiCheck } from "react-icons/bi";

function KitchenFoodCard({
  name,
  quantity,
  image_url,
  expiry_date,
  foodID,
  moveToWasted,
  usedFoodItem,
}) {
  // Convert the input into a Date object
  var expiryDate = new Date(expiry_date);

  // Current date
  var currentDate = new Date();

  // Calculate the time difference in milliseconds
  var timeDiff = expiryDate.getTime() - currentDate.getTime();

  // Convert milliseconds to days
  var daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // Define the color based on daysLeft
  let color;
  let status;
  if (daysLeft < 0) {
    color = "grey";
    status = `Expired ${Math.abs(daysLeft)} days ago`;
  } else if (daysLeft <= 2) {
    color = "red";
    status = `Days left: ${daysLeft}`;
  } else if (daysLeft <= 5) {
    color = "orange";
    status = `Days left: ${daysLeft}`;
  } else {
    color = "green";
    status = `Days left: ${daysLeft}`;
  }

  return (
    <div className="kitchen-food-card">
      <Card className="kitchen-food-card">
        <Card.Body className="d-flex align-items-center justify-content-left ">
          <div className="kitchen-food-card-image-container">
            <Image className="kitchen-card-image" src={image_url} alt={name} />
            <div className="quantity-count">{quantity}</div>
          </div>
          <div className="kitchen-title-and-expiry-container">
            <div className="kitchen-food-card-title-container">
              <Card.Title className="kitchen-card-title">{name}</Card.Title>
            </div>
            <div className="kitchen-food-card-expiry-container">
              <Card.Title className="kitchen-card-title" style={{ color }}>
                {status}
              </Card.Title>
            </div>
          </div>
          <div className="kitchen-food-card-use-btns">
            <Button
              className="kitchen-food-card-bought-btn kitchen-food-card-use-btn food-btn"
              onClick={() => usedFoodItem(foodID)}
              id="decreaseQuantity"
            >
              <BiCheck id="checkmark" size={20000} />
            </Button>
            {/* <span>Used</span> */}
            <Button
              className="kitchen-food-card-delete-btn kitchen-food-card-use-btn food-btn"
              onClick={() => moveToWasted(foodID)}
              id="decreaseQuantity"
            >
              🗑
            </Button>
            {/* <span>Wasted</span> */}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default KitchenFoodCard;
