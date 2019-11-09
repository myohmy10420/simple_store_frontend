import React, { useState } from 'react'
import axios from 'axios'
import {
  Card, CardText, CardBody, CardTitle, Button, CardLink
} from 'reactstrap'

import './index.scss'

const ProductShow = ({ history, match }) => {
  const product_id = match.params.id
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

  const addToCart = e => {
    e.preventDefault()
    let oldCart = JSON.parse(localStorage.getItem('simpleCart')) || []

    let hasSameItem = !!oldCart.find((item) => (
      item.id === product.id
    ))

    if (!hasSameItem) {
      let newProduct = {amount: 1, ...product}
      let newCart = oldCart.concat(newProduct)
      localStorage.setItem('simpleCart', JSON.stringify(newCart))
    }

    history.push('/cart')
  }
  return (
    <div className='product_show'>
      <Card>
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
          <CardLink href="#" onClick={addToCart}>
            <Button>加入購物車</Button>
          </CardLink>
        </CardBody>
      </Card>
    </div>
  )
}

export default ProductShow
