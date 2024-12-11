import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ClientSignup = () => {
  const navigate = useNavigate();
  const [client, setClient] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (client.password !== client.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError(null);

    // Set loading to true when starting the request
    setLoading(true);

    // Send signup request
    axios
      .post('https://mobileback-d8at.onrender.com/user/register', client)
      .then((result) => {
        setLoading(false); // Set loading to false once the request is complete
        if (result.data.client) {
          navigate('/login', { replace: true });
        }
      })
      .catch((err) => {
        setLoading(false); // Set loading to false in case of an error
        setError('Error registering user. Please try again.');
        console.log(err);
      });
  };

  return (
    <div>
      <div className="text-center bg-gradient-to-r from-gray-800 to-pink-400 min-h-[160px] sm:p-6 p-4">
        <h4 className="sm:text-3xl text-2xl font-bold text-white">Customer Registration Form</h4>
      </div>
      <div className="mx-4 mb-4 -mt-16">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white shadow-[0_2px_13px_-6px_rgba(0,0,0,0.4)] sm:p-8 p-4 rounded-md">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">First Name</label>
              <input
                type="text"
                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-gray-500 transition-all"
                placeholder="Enter First Name"
                name="firstName"
                value={client.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
              <input
                type="text"
                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-gray-500 transition-all"
                placeholder="Enter Last Name"
                name="lastName"
                value={client.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email Address</label>
              <input
                type="email"
                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-gray-500 transition-all"
                placeholder="Enter email"
                name="email"
                value={client.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Address</label>
              <input
                type="text"
                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-gray-500 transition-all"
                placeholder="Enter Address"
                name="address"
                value={client.address}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input
                type="password"
                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-gray-500 transition-all"
                placeholder="Enter password"
                name="password"
                value={client.password}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
              <input
                type="password"
                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-gray-500 transition-all"
                placeholder="Confirm password"
                name="confirmPassword"
                value={client.confirmPassword}
                onChange={handleChange}
                required
              />
              {client.password !== client.confirmPassword && (
                <p className="text-red-500 text-sm mt-2">Passwords do not match</p>
              )}
            </div>
          </div>

          {/* Error message */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <div className="mt-8 flex-justify-center">
            <button
              type="submit"
              className="text-center py-3 px-20 text-sm tracking-wider font-semibold rounded-md text-white bg-gray-500 hover:bg-pink-600 focus:outline-none"
              disabled={loading} // Disable the button while loading
            >
              {loading ? (
                <div className="animate-spin border-4 border-t-4 border-white rounded-full w-6 h-6 mx-auto"></div> // Show spinner when loading
              ) : (
                'Sign up'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientSignup;
