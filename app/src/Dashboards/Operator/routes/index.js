// All components mapping with path for internal routes

import { lazy } from 'react'

const MedicineCategory = lazy(() => import('../Pages/MedicineCategory'))
const Medicine = lazy(() => import('../Pages/Medicine'))
const Supplier = lazy(() => import('../Pages/Supplier'))
const Transport = lazy(() => import('../Pages/Transport'))
const Staff = lazy(() => import('../Pages/Staff'))
const User = lazy(() => import('../Pages/User'))
const Order = lazy(() => import('../Pages/Orders'))
const SingleOrder = lazy(() => import('../Pages/SingleOrder'))
const Delivery = lazy(() => import('../Pages/Delivery'))
const Shift = lazy(() => import('../../Shift'))
const ClockIn = lazy(() => import('../../ClockIn'))






const routes = [
  {
    path: '/', 
    component: MedicineCategory,
  },
  {
    path: '/medicine', 
    component: Medicine,
  },
  {
    path: '/supplier', 
    component: Supplier,
  },
  {
    path: '/transport', 
    component: Transport,
  },
  {
    path: '/staff', 
    component: Staff,
  },
  {
    path: '/user', 
    component: User,
  },
  {
    path: '/order', 
    component: Order,
  },
  {
    path: '/delivery', 
    component: Delivery,
  },
  {
    path: '/singleOrder/:id', 
    component: SingleOrder,
  },
  {
    path: '/shift', 
    component: Shift,
  },
  {
    path: '/Clock-in', 
    component: ClockIn,
  }
]

export default routes
