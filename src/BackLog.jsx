import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackLog = () => {
  const navigate = useNavigate()
  return (
    <div className="h-screen bg-gradient-to-r from-gray-200 via-gray-800 to-gray-400 font-sans tracking-wide p-4 md:p-20 lg:p-32" >
    <div className="flex justify-center items-center h-full">
      <form className="bg-gray-800  w-full p-8 rounded-md md:w-1/2 h-52">
        <h2 className="text-2xl text-white font-bold mb-7">Login As</h2>
        <div className="flex items-center justify-between">
        <div className="mb-4 g-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          <button type='button' onClick={() => {navigate ('/emplogin')}}>
            Employee
          </button>
        </div>

        <div className="mb-4 g-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          <button type='button' onClick={() => {navigate ('/adlogin')}}>
            Admin
          </button>
        </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default BackLog