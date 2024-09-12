// All components mapping with path for internal routes

import { lazy } from 'react'

const Delivery = lazy(() => import('../Pages/Delivery'))
const SingleDelivery = lazy(() => import('../Pages/SingleOrderDelivery'))
const Shift = lazy(() => import('../../Shift'))
const ClockIn = lazy(() => import('../../ClockIn'))



const routes = [
  {
    path: '/', 
    component: Delivery, 
  },
  {
    path: '/:id', 
    component: SingleDelivery, 
  },
  {
    path: '/shift', 
    component: Shift,
  },
  {
    path: '/Clock-in', 
    component: ClockIn,
  },

]

export default routes
