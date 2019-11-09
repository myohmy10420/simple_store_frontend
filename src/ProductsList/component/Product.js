import React from 'react'
import {
  Card, CardText, CardBody, CardTitle, Button, CardLink
} from 'reactstrap'

const Product = () => (
  <Card className='product'>
    <CardBody>
      <CardTitle>商品名稱</CardTitle>
      <CardText>
        <span>價格: 1000</span>
      </CardText>
      <CardLink href="/product_detail">
        <Button>查看商品</Button>
      </CardLink>
    </CardBody>
  </Card>
)

export default Product
