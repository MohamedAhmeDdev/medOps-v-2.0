// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../Pages/Dashboard'))
const MedicineCategory = lazy(() => import('../Pages/MedicineCategory'))
const Medicine = lazy(() => import('../Pages/Medicine'))
const Users = lazy(() => import('../Pages/User'))
const PasswordRequest = lazy(() => import('../Pages/PasswordRequest'))
const RoleList = lazy(() => import('../Pages/Role/Roles'))
const AddRole = lazy(() => import('../Pages/Role/CreateRole'))
const AddStaff = lazy(() => import('../Pages/Staff/CreateStaff'))
const StaffList = lazy(() => import('../Pages/Staff/Staff'))
const ShiftList = lazy(() => import('../Pages/Staff/SingleStaffShift'))
const UpdateStaff = lazy(() => import('../Pages/Staff/UpdateStaffInfo'))
const AddTransport = lazy(() => import('../Pages/Transport/CreateTransport'))
const TransportList = lazy(() => import('../Pages/Transport/Transport'))
const UpdateTransport = lazy(() => import('../Pages/Transport/UpdateTransport'))
const AddSupplier = lazy(() => import('../Pages/Supplier/CreateSupplier'))
const SupplierList = lazy(() => import('../Pages/Supplier/Supplier'))
const UpdateSupplier = lazy(() => import('../Pages/Supplier/UpdateSupplier'))
const MedicineInventory = lazy(() => import('../Pages/MedicineInventories'))
const DocumentInfo = lazy(() => import('../Pages/DocumentInfo'))




const routes = [
  {
    path: '/',
    component: MedicineCategory,
  },
  {
    path: '/medicine-list',
    component: Medicine,
  },
  {
    path: '/users',
    component: Users,
  },
  {
    path: '/password-request',
    component: PasswordRequest,
  },
  {
    path: '/add-role',
    component: AddRole,
  },
  {
    path: '/role-lists',
    component: RoleList,
  },
  {
    path: '/add-staff',
    component: AddStaff,
  },
  {
    path: '/staff-lists',
    component: StaffList,
  },
  {
    path: '/shift/:staff_id',
    component: ShiftList,
  },
    {
    path: '/:id',
    component: UpdateStaff,
  },
  {
    path: '/add-transport',
    component: AddTransport,
  },
  {
    path: '/transport-lists',
    component: TransportList,
  },
  {
    path: '/transport/:id',
    component: UpdateTransport,
  },
  {
    path: '/add-supplier',
    component: AddSupplier,
  },
  {
    path: '/supplier-lists',
    component: SupplierList,
  },
  {
    path: '/supplier/:id',
    component: UpdateSupplier
  },
  {
    path: '/medicine-inventory', 
    component: MedicineInventory,
  },
  {
    path: '/document/:document_id', 
    component: DocumentInfo,
  },
]

export default routes
