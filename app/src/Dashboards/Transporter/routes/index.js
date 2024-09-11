// All components mapping with path for internal routes

import { lazy } from 'react'

const Delivery = lazy(() => import('../Pages/Delivery'))
const SingleDelivery = lazy(() => import('../Pages/SingleOrderDelivery'))




const routes = [
  {
    path: '/', 
    component: Delivery, 
  },
  {
    path: '/:id', 
    component: SingleDelivery, 
  },

]

export default routes
