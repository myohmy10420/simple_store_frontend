import ProductsList from './ProductsList'
import ProductDetail from './ProductDetail'

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
