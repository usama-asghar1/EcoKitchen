import React from "react";
import "./ShoppingFoodCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { BiCheck } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

function ShoppingFoodCard({
  foodID,
  name,
  quantity,
  image_url,
  increaseQuantity,
  decreaseQuantity,
  deleteFood,
}) {
  return (
    <div className="shopping-food-card">
      <Card className="shopping-food-card">
        <Card.Body className="d-flex align-items-center justify-content-left ">
          <div className="shopping-food-card-image-container">
            <Image className="shopping-card-image" src={image_url} alt={name} />
            <div className="quantity-count">{quantity}</div>
          </div>
          <div className="shopping-food-card-title-container">
            <Card.Title className="shopping-card-title">{name}</Card.Title>
          </div>
          <div className="shopping-food-card-count-buttons">
            <Button
              onClick={() => increaseQuantity(foodID)}
              id="increaseQuantity"
              variant="success"
              className="shopping-food-card-quantity-button shopping-food-card-add-button food-btn"
            >
              +
            </Button>
            <Button
              onClick={() => decreaseQuantity(foodID)}
              variant="danger"
              className="shopping-food-card-quantity-button shopping-food-card-reduce-button food-btn"
            >
              -
            </Button>
          </div>
          <div className="shopping-food-card-use-btns">
            <button
              onClick={() => deleteFood(foodID)}
              id="useFood"
              className="shopping-food-card-bought-btn shopping-food-card-use-btn food-btn"
            >
              <BiCheck id="checkmark" size={35} />
            </button>
            <button
              onClick={() => deleteFood(foodID)}
              id="deleteFood"
              className="shopping-food-card-delete-btn shopping-food-card-use-btn food-btn"
            >
              <RxCross2 id="cross" size={30} />
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ShoppingFoodCard;
