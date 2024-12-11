import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const EmpLogin = () => {
  const navigate = useNavigate()
  const [employee, setEmployee] = useState({
      email: '',
      password: ''
  });
  const handleChange = (e) => {
      setEmployee({ ...employee, [e.target.name]: e.target.value });
    };
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
    
      axios
        .post("http://localhost:3000/employee/employee/login", employee)
        .then((result) => {
          setLoading(false);
          if (result.data.token) {
            localStorage.setItem("token", result.data.token);
            localStorage.setItem("employeeId", result.data.employeeId);
            localStorage.setItem("employeeName", result.data.employeeName);
            navigate("/dashboards");
          } else {
            alert(result.data.message || "Login failed. Please try again.");
          }
        })
        .catch((err) => {
          setLoading(false);
          console.error("Login error:", err.message);
          alert("An error occurred during login. Please try again.");
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
                    <label htmlFor='email' 
                    className="block text-gray-700 font-bold mb-2">Email Address</label>
                    <input
                     type='email'
                     name='email'
                     placeholder='Email Address' 
                     value={employee.email}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor='password' 
                    className="block text-gray-700 font-bold mb-2">Password</label>
                    <input
                     type='password'
                     name='password'
                     placeholder='Password' 
                     value={employee.password}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="flex items-center justify-between">
                <button
  type="submit"
  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
    loading ? "opacity-50 cursor-not-allowed" : ""
  }`}
  disabled={loading}
>
  {loading ? "Signing In..." : "Sign In"}
</button>
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