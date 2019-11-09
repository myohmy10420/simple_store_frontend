import ProductsIndex from './pages/ProductsIndex'
import ProductShow from './pages/ProductShow'
import ProductNew from './pages/ProductNew'
import Cart from './pages/Cart'

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
  }
]

export default routes
