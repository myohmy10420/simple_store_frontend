import React from 'react'
import {
  Card, CardText, CardBody, CardTitle, Button, CardLink
} from 'reactstrap'

const Product = (props) => {
  const {id, name, price} = props.item
  return (
    <Card>
      <CardBody>
        <CardTitle>商品: {name}</CardTitle>
        <CardText>
          <span>價格: {price}</span>
        </CardText>
        <CardLink href={`/product/${id}`}>
          <Button>查看商品</Button>
        </CardLink>
      </CardBody>
    </Card>
  )
}

export default Product
