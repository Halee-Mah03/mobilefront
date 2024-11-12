import axios from 'axios'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true
  const handleLogout = () => {
    axios.get('http://localhost:3000/auth/logout')
    .then(result => {
        if(result.data.Status) {
            localStorage.setItem("valid", true)
            navigate('/login')
        }
    })
}

  return (
    <div className="flex h-screen bg-white-100">
       <div className='flex flex-col w-60 bg-gray-800'>
       <div className="mt-20 flex-1 px-2 py-4 bg-gray-800 text-white">
                <button type="button" onClick={() => {navigate ('/ad_dashboard')}} className="flex items-center px-4 py-9 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    Dashboard
                </button>
                   <button type="button" onClick={() => {navigate ('/ad_dashboard/employee')}} className="flex items-center px-4 py-9  hover:text-gray-700">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
                    Manage Staff
                    </button> 
                <button type="button" onClick={() => {navigate ('/ad_dashboard/client')}} className="flex items-center px-4 py-9  hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
                    Manage Client
                </button>
                <button onClick={handleLogout} className="flex items-center px-4 py-9 mt-3 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"/>         
                    </svg>
                    Logout
                </button>
                </div>
       </div>
       <div className='container mx-auto'>
       <div className='p-5 justify-content-center shadow-xl'>
       <h1 className='text-center font-bold font-serif text-2xl'>ADMINISTRATION MANAGEMENT SYSTEM </h1>
       </div>
       <Outlet/>
       </div>
       </div>
  )
}

export default AdminDashboard