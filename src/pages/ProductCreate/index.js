import React from 'react'
import { Button, Form, FormGroup, Label, Input, CardLink } from 'reactstrap'
import axios from 'axios'

import './index.scss'

const ProductCreate = ({ history }) => {

  const post_form = (e) => {
    e.preventDefault()

    const form = document.getElementById('product_create')
    const fileds = form.querySelectorAll('.form-control')

    let data = new FormData()

    fileds.forEach((filed) => {
      let value = filed.value
      if (filed.type === 'number') {
        value = parseInt(value, 10)
      }
      data.append(filed.name, value)
    })

    axios({
      url: form.action,
      method: 'POST',
      headers: {
        'Content-type': 'multipart/form-data'
      },
      data: data
    }).then(() => {
      alert('新增成功, 導回商品列表')
      history.push('/products')
    }).catch(error => {
      const errors = error.response.data.errors
      alert(errors.join('\n'))
    })
  }
  return (
    <Form id='product_create' method='post' action={`${process.env.REACT_APP_API}/api/v1/products`} className='product_create_form'>
      <FormGroup>
        <Label>商品名稱</Label>
        <Input type='text' name='product[name]' placeholder='請輸入名稱' />
      </FormGroup>
      <FormGroup>
        <Label>商品內容</Label>
        <Input type='textarea' name='product[content]' placeholder='請輸入商品內文' />
      </FormGroup>
      <FormGroup>
        <Label>商品庫存</Label>
        <Input type='number' name='product[inventory]' placeholder='請輸入庫存' />
      </FormGroup>
      <FormGroup>
        <Label>商品價格</Label>
        <Input type='number' name='product[price]' placeholder='請輸入價格' />
      </FormGroup>
      <CardLink href="/products">
        <Button type='button'>回商品列表</Button>
      </CardLink>
      <Button onClick={post_form}>新增</Button>
    </Form>
  )
}

export default ProductCreate
