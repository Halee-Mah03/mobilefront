import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://mobileback-d8at.onrender.com/admin/admin/login", {
        email: admin.email,
        password: admin.password,
      });
  
      setLoading(false);
      if (response.data.Status) {
        // Store admin details in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("adminId", response.data.adminId);
        localStorage.setItem("adminName", response.data.adminName);
        localStorage.setItem("adminCount", response.data.adminCount);
        localStorage.setItem("employeeCount", response.data.employeeCount);
        localStorage.setItem("clientCount", response.data.clientCount);
        localStorage.setItem("salaryTotal", response.data.salaryTotal);
        localStorage.setItem("clientBalanceTotal", response.data.clientBalanceTotal);
  
        navigate("/ad_dashboard");
      } else {
        alert("Login failed: " + response.data.Error);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error logging in:", error);
      alert("An error occurred during login. Please try again later.");
    }
  };
  

  return (
    <div className="h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 font-sans tracking-wide p-4 md:p-20 lg:p-32">
      <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back! Admin</h2>
          <p className="text-gray-700 mb-6">Please sign in to your account</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={admin.email}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={admin.password}
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
              <button type="button" onClick={() => navigate('/reset')} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
