import React from 'react'

import Product from './component/Product'

import './index.scss'

const ProductList = () => {
  return (
    <div>
      {
        Array(8).fill('').map((item, index) => (
          <Product key={index} />
        ))
      }
    </div>
  );
}

export default ProductList
