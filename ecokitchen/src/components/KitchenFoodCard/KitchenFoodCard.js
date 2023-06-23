import React, { useState } from "react";
import "./KitchenFoodCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

function KitchenFoodCard({ name, quantity, image_url, expiry_date}) {
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
          <div className="shopping-food-card-expiry-container">
            <Card.Title className="shopping-card-title">{expiry_date}</Card.Title>
          </div>
         
         
          <div className="shopping-food-card-use-btns">
            <Button className="shopping-food-card-bought-btn shopping-food-card-use-btn food-btn" 
              onClick={increaseQuantity}
              id="increaseQuantity">
            
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

export default KitchenFoodCard;
