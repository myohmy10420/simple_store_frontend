import ProductsIndex from './pages/ProductsIndex'
import ProductShow from './pages/ProductShow'
import ProductNew from './pages/ProductNew'

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
    path: "/product/:id",
    component: ProductShow,
  },
  {
    path: "/product/new",
    component: ProductNew,
  }
]

export default routes
