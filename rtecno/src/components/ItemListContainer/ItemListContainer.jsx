import React, { useEffect, useState } from "react";
import Home from "../Pages/Home/Home";
import ItemList from "../ItemList/ItemList";
import menuData from "../Data/data.json"; // Import the JSON file
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
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
        if (productId) {
          setProductList(res.filter((item) => item.category === productId))
        } else {
          setProductList(res)
        }
      })
      .catch((error) => console.log(error));
  }, [productId]);

  return (
    <>
      <Home />
      <ItemList productList={productList} />
    </>
  );
};

export default ItemListContainer;