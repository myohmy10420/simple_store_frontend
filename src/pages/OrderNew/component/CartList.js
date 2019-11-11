import React from 'react'
import { Table } from 'reactstrap'

const CartList = ({cartItems}) => (
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
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{item.price}</td>
          </tr>
        ))
      }
    </tbody>
  </Table>
)

export default CartList
