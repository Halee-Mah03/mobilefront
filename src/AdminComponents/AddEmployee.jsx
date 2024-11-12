import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Salary: '',
    Password: '',
    Department: ''
  });
  const navigate = useNavigate()
  const handleChange = ({ target: { name, value } }) => {
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post('http://localhost:3000/auth/addemployee', employee)
    .then((result) => {
      if (result.data.Status) {
        navigate('/ad_dashboard');
      } else {
        alert(result.data.Error);
      }
    })
    .catch((err) => console.log(err));
};


  return (
    <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
      <div>
      <h4 className="text-xl font-bold text-gray-900 mb-8 text-center">Employee Registration Form</h4>
      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-8">
          <div>
              <label className="block text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter First Name"
                name='FirstName'
                value={employee.FirstName}
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
                name='LastName'
                value={employee.LastName}
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
                placeholder="Email Address"
                name='Email'
                value={employee.Email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">
                Salary
              </label>
              <input
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter Salary"
                name='Salary'
                value={employee.Salary}
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
                placeholder="Enter Password"
                name='Password'
                value={employee.Password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
  <label className="block text-gray-700"> Department </label>
  <select 
    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
    name='Department' 
    value={employee.Department} 
    onChange={handleChange} 
    required
  >
    <option value="Department">Select Department</option>
    <option value="Cashier">Cashier</option>
    <option value="IT">IT</option>
    <option value="Marketing">Marketing</option>
    <option value="Accounting">Accounting</option>
    <option value="Housekeepng">Housekeeping</option>
  </select>
</div>
          <div className="mt-6">
            <button type="submit" className=" w-full py-3 px-12 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none justify-content-center">
              Add employee
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}


export default AddEmployee 