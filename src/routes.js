import ProductsIndex from './pages/ProductsIndex'
import ProductShow from './pages/ProductShow'
import ProductNew from './pages/ProductNew'
import Cart from './pages/Cart'
import OrderNew from './pages/OrderNew'

const routes = [
  {
    path: "/",
    component: ProductsIndex
  },
  {
    path: "/products",
    component: ProductsIndex,
  },
  {
    path: "/product/new",
    component: ProductNew,
  },
  {
    path: "/product/:id",
    component: ProductShow,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/order/new",
    component: OrderNew,
  }
]

export default routes
