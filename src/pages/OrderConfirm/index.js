import React, { useState } from 'react'
import { Card, CardBody, CardTitle, CardText, CardLink, Button } from 'reactstrap'
import axios from 'axios'

import CartList from './component/CartList'

import './index.scss'

const OrderConfirm = ({ history }) => {
  const [haveAsyncData, setHaveAsyncData] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [inputForm, setInputForm] = useState({})

  let inputDatas = JSON.parse(localStorage.getItem('simpleOrder'))
  if (!haveAsyncData && inputDatas) {
    setInputForm(inputDatas)
    setCartItems(inputDatas.cart_items)
    setHaveAsyncData(true)
  } else {
    if (cartItems.length === 0) {
      alert('尚未選購商品')
      history.push('/')
    } else if (!inputForm.name || !inputForm.phone) {
      alert('資料未填寫完整')
      history.push('/order/new')
    }
  }

  const submitForm = e => {
    e.preventDefault()
    axios({
      url: `${process.env.REACT_APP_API}/api/v1/orders`,
      method: 'POST',
      data: inputForm
    }).then(() => {
      alert('購買成功')
      history.push('/order/result')
    }).catch(error => {
      const errors = error.response.data.errors
      alert(errors.join('\n'))
    })
  }

  return (
    <div className='order_confirm'>
      <CartList cartItems={cartItems} />
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
            總金額: {inputForm.total_price}
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
