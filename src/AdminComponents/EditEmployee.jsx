import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    salary: '',
    department: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://mobileback-d8at.onrender.com/admin/admin/employees/${id}`)
      .then(result => {
        const empData = result.data;
        setEmployee({
          firstName: empData.firstName,
          lastName: empData.lastName,
          email: empData.email,
          salary: empData.salary,
          department: empData.department,
        });
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`https://mobileback-d8at.onrender.com/admin/employees/${id}`, employee)
      .then((result) => {
        if (result.data.message === "Employee account updated successfully") {
          alert("Employee updated successfully");
          navigate('/ad_dashboard/employee');
        } else {
          alert(`Error: ${result.data.message}`);
        }
      })
      .catch((err) => {
        console.error("Error updating employee:", err.response?.data || err.message);
        alert("Failed to update employee. Please try again.");
      });
  };
  

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto bg-gray-100 shadow-lg p-8 mt-12 rounded-lg border border-gray-300">
    <div className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="firstName" className="text-gray-700 mb-2">First Name</label>
        <input
          id="firstName"
          type="text"
          placeholder="Enter First Name"
          className="bg-white border border-gray-300 text-sm px-4 py-2 rounded focus:outline-none focus:border-gray-500"
          value={employee.firstName}
          onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="lastName" className="text-gray-700 mb-2">Last Name</label>
        <input
          id="lastName"
          type="text"
          placeholder="Enter Last Name"
          className="bg-white border border-gray-300 text-sm px-4 py-2 rounded focus:outline-none focus:border-gray-500"
          value={employee.lastName}
          onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-700 mb-2">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter Email"
          className="bg-white border border-gray-300 text-sm px-4 py-2 rounded focus:outline-none focus:border-gray-500"
          value={employee.email}
          onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="salary" className="text-gray-700 mb-2">Salary</label>
        <input
          id="salary"
          type="text"
          placeholder="Enter Salary"
          className="bg-white border border-gray-300 text-sm px-4 py-2 rounded focus:outline-none focus:border-gray-500"
          value={employee.salary}
          onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="department" className="text-gray-700 mb-2">Department</label>
        <select
          id="department"
          className="bg-white border border-gray-300 text-sm px-4 py-2 rounded focus:outline-none focus:border-gray-500"
          value={employee.department}
          onChange={(e) => setEmployee({ ...employee, department: e.target.value })}
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
      <button
        type="submit"
        className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition duration-300"
      >
        Edit Employee
      </button>
    </div>
  </form>
  
  );
};

export default EditEmployee;
