import React, { useEffect, useState } from "react";
import menuData from "../Data/data.json"; // Import the JSON file
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail/ItemDetail";


function ItemDetailContainer() {
    const [product, setProduct] = useState([])
    const {productId} = useParams()

    const getMenu = () => {
        return new Promise((resolve, reject) => {
          let error = false;
    
          setTimeout(() => {
            if (error) {
              reject(
                "We are unable to fetch product information at the moment, please try again later."
              );
            } else {
              resolve(menuData); // Use the data from the JSON file
            }
          }, 2000);
        });
      };
    
      useEffect(() => {
        getMenu()
          .then((res) => {
            setProduct(res.find((item) => item.id === Number(productId)))
          })
          .catch((error) => console.log(error));
      }, [productId]);
  return (
    <ItemDetail product={product}/>
  );
}

export default ItemDetailContainer;