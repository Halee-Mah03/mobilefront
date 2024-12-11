import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddClient = () => {
  const [client, setClient] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (client.password !== client.confirmPassword) {
      return;
    }
    axios.post('https://mobileback-d8at.onrender.com/admin/admin/clients', client)
      .then(result => {
        if (result.data.message === "Client account created successfully") {
          navigate('/ad_dashboard');
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-4xl mx-auto font-sans p-8">
      <h4 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Customer Registration Form</h4>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={client.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={client.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

     
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={client.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={client.address}
            onChange={handleChange}
            placeholder="Enter Address"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

       
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={client.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={client.confirmPassword}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
            required
          />
          {client.password !== client.confirmPassword && (
            <p className="text-red-500 text-sm mt-2">Passwords do not match</p>
          )}
        </div>

       
        <div className="col-span-full">
          <button type="submit" className="w-full py-3 bg-gray-600 text-white text-sm font-semibold rounded-md hover:bg-gray-700 transition duration-300">
            Add Client
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClient;
