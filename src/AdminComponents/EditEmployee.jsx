import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditEmployee = () => {
  const {id} = useParams()
    const [employee, setEmployee] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Salary: '',
        Department: '',
      });

      const navigate = useNavigate()

  useEffect(()=> {
    axios.get('http://localhost:3000/auth/employee/' +id)
    .then(result => {
        setEmployee({
            ...employee,
            FirstName: result.data.Result[0].FirstName,
            LastName: result.data.Result[0].LastName,
            Email: result.data.Result[0].Email,
            Salary: result.data.Result[0].Salary,
            Department: result.data.Result[0].Department,
        })
    }).catch(err => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put('http://localhost:3000/auth/edit_employee/' +id, employee)
    .then(result => {
        if(result.data.Status) {
            navigate('/ad_dashboard/employee')
        }else {
            alert(result.data.Error)
        }
    }).catch(err => console.log(err))
  }
  return (
    <form onSubmit={handleSubmit} className=' max-w-md w-full mx-auto shadow-[0_2px_10px_-2px_rgba(195,169,50,0.5)] p-8 relative mt-12'>
      <div className='space-y-4'>
        <div className="flex items-center">
        <input type='text' placeholder='Enter First Name' id='inputFirstName' className='bg-gray-100 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-gray-300 transition-all'
        value={employee.FirstName}
     onChange={(e) => setEmployee({...employee, FirstName: e.target.value})}/>
      </div>

      <div className="flex items-center">
        
        <input type='text' placeholder='Enter Last Name' id='inputLastName' className='bg-gray-100 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-gray-300 transition-all'
        value={employee.LastName}
     onChange={(e) => setEmployee({...employee, LastName: e.target.value})}/>
      </div>

      <div className='flex items-center'>
      <input type='email' placeholder='Enter Email' autoComplete='off' id='inputEmail'  className='bg-gray-100 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-gray-300 transition-all'
      value={employee.Email}
       onChange={(e) => setEmployee({...employee, Email: e.target.value})}/>
      </div>

      <div className='flex items-center'>

      <input type='text' placeholder='Enter Salary' id='inputSalary' autoComplete='off' className='bg-gray-100 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-gray-300 transition-all' 
      value={employee.Salary}
       onChange={(e) => setEmployee({...employee, Salary: e.target.value})}/>
      </div>

      <div>
  <label className="block text-gray-700">Department</label>
  <select 
    name="Department" 
    id="Department" 
    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
    value={employee.Department} 
    onChange={(e) => setEmployee({...employee, Department: e.target.value})}
    required
  >
    <option value="">Select Department</option>
    <option value="Cashier">Cashier</option>
    <option value="IT">IT</option>
    <option value="Marketing">Marketing</option>
    <option value="Accounting">Accounting</option>
    <option value="Housekeepng">Housekeeping</option>
  </select>
</div>
        <div>
            <button type='submit' className='mt-4 ml-9 bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline'>
                Edit Employee
            </button>
            </div>
        </div>
        </form>
        
  )
}

export default EditEmployee