/** Icons are imported separatly to reduce build time */



const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/manager/medicine-category',
    name: 'Medicine Category',
  },
  {
    path: '/manager/medicine-list',
    name: 'Medicine',
  },
  {
    path: '/manager/users',
    name: 'Users',
  },
  {
    path: '/manager/password-request',
    name: 'Password Request',
  },
  {
    path: '', 
    name: 'Staffs',
    submenu : [
      {
        path: '/manager/add-staff', 
        name: 'Add Staff',
      },
      {
        path: '/manager/staff-lists',
        name: 'Staff List',
      },
    ]
  },
  {
    path: '', 
    name: 'Transports',
    submenu : [
      {
        path: '/manager/add-transport', 
        name: 'Add Transport',
      },
      {
        path: '/manager/transport-lists',
        name: 'Transport List',
      },
    ]
  },
  {
    path: '', 
    name: 'Supplier',
    submenu : [
      {
        path: '/manager/add-supplier', 
        name: 'Add Supplier',
      },
      {
        path: '/manager/supplier-lists',
        name: 'Supplier List',
      },
    ]
  },
]

export default routes


