import React, { useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ product }) => {
  const [count, setCount] = useState(1);

  const onAddToCart = (quantity) => {
    console.log(`You added ${quantity} products to the cart`);
  };

  const increaseQuantity = () => {
    if (count < product.stock) {
      setCount(count + 1);
    }
  };

  const decreaseQuantity = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Card style={{ width: "18rem", height: "12rem" }}>
      <Card.Img variant="top" src={product.image} style={{ height: "100%" }} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
        <ListGroup.Item>Available Stock: {product.stock}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex flex-column align-items-center">
        <div className="d-flex align-items-center justify-content-center mb-2">
          <ItemCount/>
        </div>
        <Button variant="secondary" onClick={() => onAddToCart(count)}>
          Add to Cart
        </Button>
        <Button variant="secondary" as={Link} to={`/product/${product.id}`}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;