import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './index.scss'

const Product = () => (
  <Card className='product'>
    <CardBody>
      <CardTitle>商品名稱</CardTitle>
      <CardText>
        <span>商品內容</span><br/>
        <span>價格: 1000</span>
      </CardText>
      <Button>查看商品</Button>
    </CardBody>
  </Card>
)

function App() {
  return (
    <div>
      {
        Array(8).fill('').map((item, index) => (
          <Product key={index} />
        ))
      }
    </div>
  );
}

export default App;
