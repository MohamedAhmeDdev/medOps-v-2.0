// All components mapping with path for internal routes

import { lazy } from 'react'

const Order = lazy(() => import('../Pages/Order'))
const SingleOrder = lazy(() => import('../Pages/SingleOrder'))
const CreateMedicineCategory = lazy(() => import('../Pages/MedicineCategory/CreateCategory'))
const MedicineCategory = lazy(() => import('../Pages/MedicineCategory/MedicineCategory'))
const UpdateMedicineCategory = lazy(() => import('../Pages/MedicineCategory/UpdateMedicineCategory'))
const CreateMedicine = lazy(() => import('../Pages/Medicine/CreateMedicine'))
const Medicine = lazy(() => import('../Pages/Medicine/Medicine'))
const UpdateMedicine = lazy(() => import('../Pages/Medicine/UpdateMedicine'))
const Shift = lazy(() => import('../../Shift'))
const ClockIn = lazy(() => import('../../ClockIn'))
const MedicineInventoryForm = lazy(() => import('../Pages/MedicineInventoryForm'))
const MedicineInventory = lazy(() => import('../Pages/MedicineInventories'))
const UploadDocument = lazy(() => import('../Pages/UploadDocument'))
const DocumentInfo = lazy(() => import('../Pages/DocumentInfo'))

const routes = [
  {
    path: '/', 
    component: Order,
  },
  {
    path: '/single-order/:id', 
    component: SingleOrder,
  },
  {
    path: '/add-medicine-category', 
    component: CreateMedicineCategory,
  },
  {
    path: '/medicine-category-list', 
    component: MedicineCategory,
  },
  {
    path: '/updateMedicineCategory/:id', 
    component: UpdateMedicineCategory,
  },
  {
    path: '/add-medicine', 
    component: CreateMedicine,
  },
  {
    path: '/medicine-list', 
    component: Medicine,
  },
  {
    path: '/update-medicine/:id', 
    component: UpdateMedicine,
  },
  {
    path: '/shift', 
    component: Shift,
  },
  {
    path: '/Clock-in', 
    component: ClockIn,
  },
  {
    path: '/medicine-inventory-form', 
    component: MedicineInventoryForm,
  },
  {
    path: '/medicine-inventory', 
    component: MedicineInventory,
  },
  {
    path: '/upload-document', 
    component: UploadDocument,
  },
  {
    path: '/document/:document_id', 
    component: DocumentInfo,
  },
]

export default routes
