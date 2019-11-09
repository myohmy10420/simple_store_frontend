import ProductsList from './pages/ProductsList'
import ProductDetail from './pages/ProductDetail'
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
    component: ProductDetail,
  },
  {
    path: "/product/new",
    component: ProductNew,
  }
]

export default routes
