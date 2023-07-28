import React, { useEffect, useState } from "react";
import Home from "../Pages/Home/Home";
import ItemList from "../ItemList/ItemList";
import menuData from "../Data/data.json"; // Import the JSON file

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

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
      .then((res) => setProductList(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Home />
      <ItemList productList={productList} />
    </>
  );
};

export default ItemListContainer;