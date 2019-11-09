import React from 'react'
import { Table, Button } from 'reactstrap'

import './index.scss'

const Cart = (props) => {
  return (
    <div className="cart">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>商品名稱</th>
            <th>商品價格</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>10050</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>10000</td>
          </tr>
        </tbody>
      </Table>
      <Button>填寫訂單</Button>
    </div>
  )
}

export default Cart
