import ProductsList from './pages/ProductsList'
import ProductShow from './pages/ProductShow'
import ProductNew from './pages/ProductNew'

const routes = [
  {
    path: "/",
    component: ProductsList
  },
  {
    path: "/products",
    component: ProductsList,
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
