import React, {useState} from "react";
import { Button } from "react-bootstrap";


const ItemCount = ({ product }) => {
    const [count, setCount] = useState(1);
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
        <div className="d-flex align-items-center justify-content-center mb-2">
          <Button variant="secondary" onClick={decreaseQuantity} style={{ marginRight: "10px" }}>
            -
          </Button>
          <span className="btn">{count}</span>
          <Button variant="secondary" onClick={increaseQuantity} style={{ marginLeft: "10px" }}>
            +
          </Button>
        </div>
    )

}

export default ItemCount