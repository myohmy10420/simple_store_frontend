import React, { useState } from 'react'
import { FormGroup, Input } from 'reactstrap'

const LineItem = ({item, index}) => {
  const {id, name, inventory, price, amount} = item
  const [currentAmount, setCurrentAmount] = useState(amount)

  const updateLineItemAmount = e => {
    let productId = parseInt(e.target.dataset.product_id)
    let selectdAmount = e.target.value
    setCurrentAmount(selectdAmount)

    let oldCart = JSON.parse(localStorage.getItem('simpleCart'))
    let newCart = oldCart.map(item => {
      let newItem = {...item}
      if (item.id === productId) {
        newItem.amount = selectdAmount
      }
      return newItem
    })

    localStorage.setItem('simpleCart', JSON.stringify(newCart))
  }
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{name}</td>
      <td>
        <FormGroup>
          <Input
            type='select'
            value={currentAmount}
            data-product_id={id} onChange={updateLineItemAmount}>
            {
              Array(inventory).fill('').map((i, index) => (
                <option key={index}>{index + 1}</option>
              ))
            }
          </Input>
        </FormGroup>
      </td>
      <td>{price}</td>
    </tr>
  )
}

export default LineItem
