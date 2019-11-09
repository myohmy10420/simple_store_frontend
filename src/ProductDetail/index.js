import React from 'react'
import {
  Card, CardText, CardBody, CardTitle, Button, CardLink
} from 'reactstrap'

import './index.scss'

const ProductList = () => {
  return (
    <Card className='product'>
      <CardBody>
        <CardTitle>商品名稱</CardTitle>
        <CardText>
          <span>商品內容</span><br/>
          <span>價格: 1000</span>
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

export default ProductList
