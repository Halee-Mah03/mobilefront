import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    salary: '',
    department: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.password !== employee.confirmPassword) {
      return;
    }
    axios.post('https://mobileback-d8at.onrender.com/admin/admin/employees', employee)
      .then((result) => {
        console.log(result.data.employee); // Log created employee data for verification
        if (result.data.message === "Employee account created successfully") {
          navigate('/ad_dashboard');
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-4xl mx-auto font-sans p-6">
      <h4 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Employee Registration Form</h4>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
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
            value={employee.lastName}
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
            value={employee.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Salary</label>
          <input
            type="text"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            placeholder="Enter Salary"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

      
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Department</label>
          <select
            name="department"
            value={employee.department}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Department</option>
            <option value="Cashier">Cashier</option>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
            <option value="Accounting">Accounting</option>
            <option value="Housekeeping">Housekeeping</option>
          </select>
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={employee.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

      
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={employee.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
            required
          />
          {employee.password !== employee.confirmPassword && (
            <p className="text-red-500 text-sm mt-2">Passwords do not match</p>
          )}
        </div>

        
        <div className="col-span-full mt-4">
          <button type="submit" className="w-full py-3 bg-gray-600 text-white text-sm font-semibold rounded-md hover:bg-gray-700 focus:outline-none transition duration-300">
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
