import React from 'react'
import { Button, Form, FormGroup, Label, Input, CardLink } from 'reactstrap'

import './index.scss'

const ProductCreate = () => {
  return (
    <Form className='product_create_form'>
      <FormGroup>
        <Label>商品名稱</Label>
        <Input type='text' name='email' placeholder='請輸入名稱' />
      </FormGroup>
      <FormGroup>
        <Label>商品內容</Label>
        <Input type='textarea' name='content' placeholder='請輸入價格' />
      </FormGroup>
      <FormGroup>
        <Label>商品價格</Label>
        <Input type='price' name='price' placeholder='請輸入價格' />
      </FormGroup>
      <CardLink href="/products">
        <Button type='button'>回商品列表</Button>
      </CardLink>
      <Button>新增</Button>
    </Form>
  )
}

export default ProductCreate
