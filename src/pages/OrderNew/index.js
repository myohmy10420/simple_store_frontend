import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, CardLink } from 'reactstrap'

import CartList from './component/CartList'

import './index.scss'

const OrderNew = ({ history }) => {
  const [haveAsyncData, setHaveAsyncData] = useState(false)
  const [cartItems, setCartItems] = useState([])

  let inputForm = {}

  if (!haveAsyncData) {
    setCartItems(JSON.parse(localStorage.getItem('simpleCart')) || [])
    setHaveAsyncData(true)
  }

  if (haveAsyncData && cartItems.length === 0) {
    alert('尚未選購商品')
    history.push('/')
  }

  const goNext = e => {
    e.preventDefault()

    let errors = validateForm()

    if (errors.length > 0) {
      alert(errors.join('\n'))
    } else {
      goOrderConfirm()
    }
  }

  const validateForm = () => {
    let errors = []

    const form = document.getElementById('order_new')
    const fileds = form.querySelectorAll('.form-control')

    fileds.forEach(filed => {
      if (!filed.value) {
        errors = errors.concat(`${filed.name} can't be black`)
      } else {
        inputForm[filed.name.toLowerCase()] = filed.value
      }
    })

    return errors
  }

  const goOrderConfirm = () => {
    inputForm.cart_items = cartItems
    inputForm.total_price = calculatePrice(inputForm.cart_items)
    localStorage.setItem('simpleOrder', JSON.stringify(inputForm))
    history.push('/order/confirm')
  }

  const calculatePrice = items => {
    let itemTotalPrice = items.map(item => item.amount * item.price)
    let totalPrice = itemTotalPrice.reduce((a,b) => a+b)
    return totalPrice
  }
  return (
    <div className='order_new'>
      <CartList cartItems={cartItems} />
      <Form id='order_new' method='post' action={`${process.env.REACT_APP_API}/api/v1/orders`}>
        <FormGroup>
          <Label>*購買人名稱</Label>
          <Input type='text' name='Name' placeholder='請輸入姓名' />
        </FormGroup>
        <FormGroup>
          <Label>*聯絡電話</Label>
          <Input type='phone' name='Phone' placeholder='請留下聯絡電話' />
        </FormGroup>
        <CardLink href="/order/confirm" onClick={goNext}>
          <Button type='button'>下一步</Button>
        </CardLink>
        <CardLink href="/cart">
          <Button type='button'>回購物車清單</Button>
        </CardLink>
      </Form>
    </div>
  )
}

export default OrderNew
