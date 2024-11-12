import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const EmpLogin = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: '', password: '' });
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/emp/emlogin", values)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token); 
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        navigate("/dashboards");
      })
      .catch((error) => {
        console.error(error);
      });
  };
       
  return (  
<div className= "h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 font-sans tracking-wide p-4 md:p-20 lg:p-32">
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Staff!</h2>
            <p className="text-gray-700 mb-6">Please sign in to your account</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor='Email' className="block text-gray-700 font-bold mb-2">Email Address</label>
                    <input type='text' placeholder='Email Address' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                     onChange={(e) => setValues({...values, email : e.target.value})}/>
                </div>

                <div className="mb-6">
                    <label htmlFor='Password' className="block text-gray-700 font-bold mb-2">Password</label>
                    <input type='Password' placeholder='Password' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                     onChange={(e) => setValues({...values, password : e.target.value})}/>
                </div>
                <div className="flex items-center justify-between">
                    <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
                    <button type="button" onClick={() => {navigate ('/reset')}} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
                        Forgot Password?
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default EmpLogin