import React from "react";
import ItemCount from "../components/ItemCount/ItemCount";
import { Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";


function ItemDetail({product}){
    return(
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
    )
}

export default ItemDetail;