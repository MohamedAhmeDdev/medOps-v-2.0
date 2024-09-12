/** Icons are imported separatly to reduce build time */



const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/logistics', 
    name: 'Order',
  },
  {
    path: '', 
    name: 'Medicine Category',
    submenu : [
      {
        path: '/logistics/add-medicine-category',
        name: 'Add Medicine Category',
      },
      {
        path: '/logistics/medicine-category-list',
        name: 'Medicine-category',
      },
    ]
  },
  {
    path: '', 
    name: 'Medicine',
    submenu : [
      {
        path: '/logistics/add-medicine',
        name: 'Add Medicine',
      },
      {
        path: '/logistics/medicine-list',
        name: 'Medicine',
      },
    ]
  },
  {
    path: '/logistics/Clock-in', 
    name: 'Clock In',
  },
  {
    path: '/logistics/shift', 
    name: 'Shift',
  },
]

export default routes


