import routes from '../routes/sidebar'
import { NavLink,  Routes, Link , useLocation} from 'react-router-dom'
import SidebarSubmenu from './SidebarSubmenu';
// import XMarkIcon  from '@heroicons/react/24/outline/XMarkIcon'
import { useDispatch } from 'react-redux';
import logo  from '../../../assets/img/logo2.jpg'

function LeftSidebar(){
    const location = useLocation();

    const dispatch = useDispatch()


    const close = (e) => {
        document.getElementById('left-sidebar-drawer').click()
    }

    return(
        <div className="drawer-side  z-30  ">
            <label  className="drawer-overlay"></label> 
            <ul className="menu  pt-2 w-60 bg-base-100 min-h-full   text-base-content">
            <button className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden" onClick={() => close()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="h-6 w-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>

                <div className="mb-2  h-36 font-semibold text-xl">
                   <img className="w-full  h-full" src={logo} alt="Logo"/>
                 </div>
                { routes.map((route, k) => {
                        return(
                            <li className="my-1" key={k}>
                                { route.submenu ? 
                                   <SidebarSubmenu {...route}/> : 
                                    (<NavLink
                                        end
                                        to={route.path}
                                        className="" >
                                           {route.icon} {route.name}
                                            {
                                                location.pathname === route.path ? (<span className="absolute mt-1 mb-1 inset-y-0 left-0 w-1 "
                                                aria-hidden="true"></span>) : null
                                            }
                                    </NavLink>)
                                }
                                
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default LeftSidebar