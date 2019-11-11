import React from 'react'
import { Jumbotron, CardLink, Button } from 'reactstrap'

import './index.scss'

const OrderResult = () => {
  localStorage.removeItem('simpleCart')
  localStorage.removeItem('simpleOrder')

  return (
    <div className='order_result'>
      <Jumbotron>
        <h1 className="display-3">購買完成！</h1>
        <p className="lead">
          我們會寄一封E-mail給您，如有任何問題，請與我們聯繫。
        </p>
        <hr className="my-2" />
        <p className="lead">
          <CardLink href="/">
            <Button type='button'>回首頁</Button>
          </CardLink>
          <CardLink href="/contact">
            <Button type='button'>聯繫我們</Button>
          </CardLink>
        </p>
      </Jumbotron>
    </div>
  )
}

export default OrderResult
