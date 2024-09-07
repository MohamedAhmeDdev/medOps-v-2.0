/** Icons are imported separatly to reduce build time */



const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/app/dashboard',
    name: 'Dashboard',
  },
  {
    path: '/app/leads', // url
    name: 'Leads', // name that appear in Sidebar
  },
  {
    path: '/app/transactions', // url
  
    name: 'Transactions', // name that appear in Sidebar
  },
  {
    path: '', //no url needed as this has submenu
 
    name: 'Settings', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/settings-profile', //url
 
        name: 'Profile', // name that appear in Sidebar
      },
      {
        path: '/app/settings-billing',
       
        name: 'Billing',
      },
      {
        path: '/app/settings-team', // url
     
        name: 'Team Members', // name that appear in Sidebar
      },
    ]
  },
  
]

export default routes


