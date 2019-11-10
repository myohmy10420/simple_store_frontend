import React, { useState } from 'react'
import { Table, Button, NavLink } from 'reactstrap'

import LineItem from './component/LineItem'

import './index.scss'

const Cart = () => {
  const [haveAsyncData, setHaveAsyncData] = useState(false)
  const [cartItems, setCartItems] = useState([])

  if (!haveAsyncData) {
    setCartItems(JSON.parse(localStorage.getItem('simpleCart')) || [])
    setHaveAsyncData(true)
  }

  const cleanCart = (e) => {
    e.preventDefault()
    localStorage.removeItem('simpleCart')
    setCartItems([])
  }
  return (
    <div className="cart">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>商品名稱</th>
            <th>購買數量</th>
            <th>商品價格</th>
          </tr>
        </thead>
        <tbody>
          {
            cartItems.map((item, index) => (
              <LineItem item={item} index={index+1} key={index} />
            ))
          }
        </tbody>
      </Table>
      <NavLink href="/order/new">
        <Button>填寫訂單</Button>
      </NavLink>
      <NavLink href="#" onClick={cleanCart}>
        <Button>清空購物車</Button>
      </NavLink>
      <NavLink href="/products">
        <Button>返回商品列表</Button>
      </NavLink>
    </div>
  )
}

export default Cart
