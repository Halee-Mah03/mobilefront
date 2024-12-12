import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditClient = () => {
  const { id } = useParams();
  const [client, setClient] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://mobileback-d8at.onrender.com/admin/clients/${id}`)
      .then(response => {
        setClient(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching client data:", err);
        setError('Failed to fetch client details.');
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!client.firstName || !client.lastName || !client.email || !client.address) {
      alert("All fields are required.");
      return;
    }

    axios.patch(`https://mobileback-d8at.onrender.com/admin/clients/${id}`, client)
      .then(result => {
        if (result.data.message === "client account updated successfully") {
          alert("Client updated successfully");
          navigate('/ad_dashboard/client');
        } else {
          alert(`Error: ${result.data.message}`);
        }
      })
      .catch(err => {
        console.error("Error updating client:", err.response?.data || err.message);
        alert("Failed to update client. Please try again.");
      });
  };

  if (loading) return <div className="text-center text-gray-700">Loading client details...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

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
            value={client.firstName}
            onChange={(e) => setClient({ ...client, firstName: e.target.value })}
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
            value={client.lastName}
            onChange={(e) => setClient({ ...client, lastName: e.target.value })}
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
            value={client.email}
            onChange={(e) => setClient({ ...client, email: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="text-gray-700 mb-2">Address</label>
          <input
            id="address"
            type="text"
            placeholder="Enter Address"
            className="bg-white border border-gray-300 text-sm px-4 py-2 rounded focus:outline-none focus:border-gray-500"
            value={client.address}
            onChange={(e) => setClient({ ...client, address: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Update Client
        </button>
      </div>
    </form>
  );
};

export default EditClient;
