import React from "react";
import "./ShoppingFoodCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import broccoli from "../../assets/food/brocol.jpg";

function ShoppingFoodCard({ name, quantity, src }) {
  return (
    <div className="shopping-food-card">
      <Card className="shopping-food-card">
        <Card.Body className="d-flex align-items-center justify-content-left ">
          <div className="shopping-food-card-image-container">
            <Image className="shopping-card-image" src={src} alt={name} />
            <div className="quantity-count">{quantity}</div>
          </div>
          <div className="shopping-food-card-title-container">
            <Card.Title className="shopping-card-title">{name}</Card.Title>
          </div>
          <div className="shopping-food-card-count-buttons">
            <Button
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
