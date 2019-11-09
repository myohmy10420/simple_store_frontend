import ProductsList from './pages/ProductsList'
import ProductDetail from './pages/ProductDetail'
import ProductCreate from './pages/ProductCreate'

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
    path: "/product/create",
    component: ProductCreate,
  }
]

export default routes
