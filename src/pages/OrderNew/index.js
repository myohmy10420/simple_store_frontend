import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, CardLink } from 'reactstrap'

import CartList from './component/CartList'

import './index.scss'

const OrderNew = ({ history }) => {
  const [haveAsyncData, setHaveAsyncData] = useState(false)
  const [cartItems, setCartItems] = useState([])

  if (!haveAsyncData) {
    setCartItems(JSON.parse(localStorage.getItem('simpleCart')) || [])
    setHaveAsyncData(true)
  }

  if (haveAsyncData && cartItems.length === 0) {
    alert('尚未選購商品')
    history.push('/')
  }
  return (
    <div className='order_new'>
      <CartList cartItems={cartItems} />
      <Form id='order_new' method='post' action={`${process.env.REACT_APP_API}/api/v1/orders`}>
        <FormGroup>
          <Label>*購買人名稱</Label>
          <Input type='text' name='order[name]' placeholder='請輸入姓名' />
        </FormGroup>
        <FormGroup>
          <Label>*聯絡電話</Label>
          <Input type='phone' name='order[phone]' placeholder='請留下聯絡電話' />
        </FormGroup>
        <CardLink href="/order/comfirm">
          <Button>下一步</Button>
        </CardLink>
        <CardLink href="/cart">
          <Button type='button'>回購物車清單</Button>
        </CardLink>
      </Form>
    </div>
  )
}

export default OrderNew
