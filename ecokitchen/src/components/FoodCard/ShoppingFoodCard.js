import React, { useState } from "react";
import "./ShoppingFoodCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

function ShoppingFoodCard({ name, quantity, image_url }) {
  const [updateQuantity, setUpdateQuantity] = useState(quantity);

  function increaseQuantity() {
    setUpdateQuantity(updateQuantity + 1);

    console.log("increase");
  }

  return (
    <div className="shopping-food-card">
      <Card className="shopping-food-card">
        <Card.Body className="d-flex align-items-center justify-content-left ">
          <div className="shopping-food-card-image-container">
            <Image className="shopping-card-image" src={image_url} alt={name} />
            <div className="quantity-count">{updateQuantity}</div>
          </div>
          <div className="shopping-food-card-title-container">
            <Card.Title className="shopping-card-title">{name}</Card.Title>
          </div>
          <div className="shopping-food-card-count-buttons">
            <Button
              onClick={increaseQuantity}
              id="increaseQuantity"
              variant="success"
              className="shopping-food-card-quantity-button shopping-food-card-add-button food-btn"
            >
              +
            </Button>
            <Button
              variant="danger"
              className="shopping-food-card-quantity-button shopping-food-card-reduce-button food-btn"
            >
              -
            </Button>
          </div>
          <div className="shopping-food-card-use-btns">
            <Button className="shopping-food-card-bought-btn shopping-food-card-use-btn food-btn">
              ✔
            </Button>
            <Button className="shopping-food-card-delete-btn shopping-food-card-use-btn food-btn">
              🗑
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ShoppingFoodCard;
