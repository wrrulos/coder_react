import React from 'react';
import ProductCard from '../Item/Item'; // Assuming the Item component has been renamed to ProductCard

const ProductList = ({ productList }) => {
  return (
    <div className='d-flex justify-content-evenly align-items-center flex-wrap'>
      {productList.map((product) => (
        <div key={product.id} style={{ marginBottom: '150px' }}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;