import React from 'react'
import { Button, Form, FormGroup, Label, Input, CardLink } from 'reactstrap'
import axios from 'axios'

import './index.scss'

const Contact = ({ history }) => {
  localStorage.removeItem('simpleCart')
  localStorage.removeItem('simpleOrder')

  const post_form = (e) => {
    e.preventDefault()

    const content = document.getElementsByName('contact[content]')[0].value

    axios({
      url: `${process.env.REACT_APP_API}/api/v1/issues`,
      method: 'POST',
      data: {
        issue: {
          content: content
        }
      }
    }).then(() => {
      alert('聯繫成功, 導回商品列表')
      history.push('/products')
    }).catch(error => {
      const errors = error.response.data.errors
      alert(errors.join('\n'))
    })
  }

  return (
    <Form id='contact' method='post' className='contact_form'>
      <FormGroup>
        <Label>聯繫我們</Label>
        <Input type='textarea' name='contact[content]' placeholder='請留下訊息' />
      </FormGroup>
      <CardLink href="/">
        <Button type='button'>回首頁</Button>
      </CardLink>
      <CardLink href="/" onClick={post_form}>
        <Button>送出聯繫</Button>
      </CardLink>
    </Form>
  )
}

export default Contact
