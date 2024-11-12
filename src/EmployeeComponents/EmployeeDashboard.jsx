import axios from 'axios'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const EmployeeDashboard = () => {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true
  const handleLogout = () => {
    axios.get('http://localhost:3000/emp/logout')
    .then(result => {
        if(result.data.Status) {
            localStorage.setItem("valid", true)
            navigate('/login')
        }
    })
}

  return (
    <div className="flex h-screen bg-white-100">
       <div className='flex flex-col w-64 bg-gray-800 '>
       <div className=" mt-10 flex-1 px-2 py-4 bg-gray-800 text-white fixed top-0 left-0 h-screen">
                <button type="button" onClick={() => {navigate ('')}} className="flex items-center px-4 py-9 text-white-100 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    Dashboard
                </button>
                   <button type="button" onClick={() => {navigate ('/dashboards/clientaccounts')}}
             className="flex items-center px-4 py-9 mt-2 text-white-100 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
                    Customer List
                    </button> 
                <button type="button" onClick={() => {navigate ('/dashboards/transactions')}} className="flex items-center px-4 py-9 mt-2 text-white-100 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>
                    Transaction History
                </button>
                <button onClick={handleLogout} className="flex items-center px-4 py-9 mt-2 text-white-100 hover:text-gray-700">
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
       <h1 className='text-center font-bold font-serif text-2xl'>EMPLOYEE MANAGEMENT SYSTEM </h1>
       </div>
       <Outlet/>
       </div>
       </div>
  )
}

export default EmployeeDashboard