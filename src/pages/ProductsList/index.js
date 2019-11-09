import React, { useState } from 'react'
import axios from 'axios'

import Product from './component/Product'

import './index.scss'

const ProductList = () => {
  const [haveAsyncData, setHaveAsyncData] = useState(false)
  const [products, setProducts] = useState([])

  if ( !haveAsyncData ) {
    setHaveAsyncData(true)
    axios({
      url: `${process.env.REACT_APP_API}/api/v1/products`,
      method: 'GET'
    }).then(response => {
      const { data } = response
      setProducts(data.products)
    }).catch(error => {
      alert('讀取商品失敗')
    })
  }

  return (
    <div>
      {
        products.map((item, index) => (
          <Product item={item} key={index} />
        ))
      }
    </div>
  );
}

export default ProductList
