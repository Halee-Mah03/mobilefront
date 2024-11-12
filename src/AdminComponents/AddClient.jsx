import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddClient = () => {
  const [client, setClient] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    address: '',
  });
  const navigate = useNavigate()
  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/auth/addclient', client)
    .then(result => {
        if(result.data.Status) {
            navigate('/ad_dashboard')
        } else {
            alert(result.data.Error)
        }
    })
    .catch((err) => console.log(err))
  };
    
  return (
    <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
      <div>
      <h4 className="text-xl font-bold text-gray-900 mb-8 text-center">Customer Registration Form</h4>
      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-8">
          <div>
              <label className="block text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter First Name"
                name='first_name'
                value={client.first_name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter Last Name"
                name='last_name'
                value={client.last_name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter email"
                name='email'
                value={client.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">
                Address
              </label>
              <input
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter Address"
                name='address'
                value={client.address}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter password"
                name='password'
                value={client.password}
                onChange={handleChange}
                required
              />
            </div>
          <div className="mt-36">
            <button type="submit" className=" w-full py-3 px-12 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none justify-content-center">
              Add Client
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddClient