import ProductsList from './pages/ProductsList'
import ProductDetail from './pages/ProductDetail'

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
    path: "/product_detail",
    component: ProductDetail,
  }
]

export default routes
