import React from 'react'
import { UseAuthContext } from '../../utils/Hook/StaffAuth';

function Dashboard() {
  const { dispatch } = UseAuthContext ();

  const handleClick = () => {
    localStorage.removeItem("user"); // remove use from localStorage
    dispatch({ type: "LOGOUT" }); //  dispatch log out action
  };
  return (
    <div>Dashboard
                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex flex-col m-auto" onClick={handleClick}>LogOut</button>
    </div>
  )
}

export default Dashboard