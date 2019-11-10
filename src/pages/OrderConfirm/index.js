import React, { useState } from 'react'
import { Card, CardBody, CardTitle, CardText, CardLink, Button } from 'reactstrap'

import CartList from './component/CartList'

import './index.scss'

const OrderConfirm = ({ history }) => {
  const [haveAsyncData, setHaveAsyncData] = useState(false)
  const [inputForm, setInputForm] = useState({})

  if (!haveAsyncData) {
    setInputForm(JSON.parse(localStorage.getItem('simpleOrder')))
    setHaveAsyncData(true)
  } else {
    if (inputForm.cartItems.length === 0) {
      alert('尚未選購商品')
      history.push('/')
    }
    if (!inputForm.name || !inputForm.phone) {
      alert('資料未填寫完整')
      history.push('/order/new')
    }
  }

  const submitForm = e => {
    e.preventDefault()
    console.log('submitForm')
  }

  return (
    <div className='order_confirm'>
      <CartList cartItems={inputForm.cartItems} />
      <Card>
        <CardBody>
          <CardTitle>購買資訊</CardTitle>
          <hr/>
          <CardText>
            姓名: {inputForm.name}
          </CardText>
          <CardText>
            電話: {inputForm.phone}
          </CardText>
          <CardText>
            總金額: {inputForm.totalPrice}
          </CardText>
        </CardBody>
      </Card>
      <CardLink href="/order/result" onClick={submitForm}>
        <Button type='button'>確認購買</Button>
      </CardLink>
      <CardLink href="/order/new">
        <Button type='button'>上一步</Button>
      </CardLink>
    </div>
  )
}

export default OrderConfirm
