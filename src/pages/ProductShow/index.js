import React, { useState } from 'react'
import axios from 'axios'
import {
  Card, CardText, CardBody, CardTitle, Button, CardLink
} from 'reactstrap'

import './index.scss'

const ProductShow = (props) => {
  const product_id = props.match.params.id
  const [haveAsyncData, setHaveAsyncData] = useState(false)
  const [product, setProduct] = useState({})

  if ( !haveAsyncData ) {
    setHaveAsyncData(true)
    axios({
      url: `${process.env.REACT_APP_API}/api/v1/products/${product_id}`,
      method: 'GET'
    }).then(response => {
      const { data } = response
      setProduct(data.product)
    }).catch(error => {
      alert('讀取商品失敗')
    })
  }
  return (
    <Card className='product'>
      <CardBody>
        <CardTitle>商品: {product.name}</CardTitle>
        <CardText>
          <span>{product.content}</span><br/><br/>
          <span>價格: {product.price}</span><br/>
          <span>剩餘數量: {product.inventory}</span>
        </CardText>
        <CardLink href="/products">
          <Button>回商品列表</Button>
        </CardLink>
        <CardLink href="#">
          <Button>加入購物車</Button>
        </CardLink>
      </CardBody>
    </Card>
  );
}

export default ProductShow
