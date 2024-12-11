import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Credit = () => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { clientId } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await axios.post(`http://localhost:3000/employee/${clientId}/credit`, {
        amount: parseFloat(amount),
        description,
      });
      setLoading(false);
      setSuccessMessage('Transaction successful!');
      setTimeout(() => {
        navigate('/dashboards/transactions', { state: { transaction: response.data } });
      }, 2000); // Navigate after 2 seconds
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="space-y-2 font-[sans-serif] text-[#333] max-w-md mx-auto mt-9">
      <header className="text-center text-white bg-[#121533] py-8 px-6 sm:px-10 font-[sans-serif] min-h-[70px]">
        CUSTOMER CREDIT FORM
      </header>
      <form className="mt-20 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-black-500"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Transaction Description</label>
          <input
            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-black-500"
            type="text"
            placeholder="Enter Transaction Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="!mt-12">
          <button
            type="submit"
            className="w-full py-3 px-4 text-m tracking-wider font-semibold rounded-md text-white bg-[#121533] hover:bg-gray-900"
            disabled={loading}
          >
            {loading ? "Processing..." : "Credit Account"}
          </button>
        </div>
      </form>

      {successMessage && (
        <div className="mt-4 text-green-600 bg-green-100 border border-green-300 p-3 rounded-md">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="mt-4 text-red-600 bg-red-100 border border-red-300 p-3 rounded-md">
          {errorMessage}
        </div>
      )}

      
      {loading && (
        <div className="flex justify-center mt-4">
          <div className="loader border-t-2 border-gray-800 rounded-full w-6 h-6 animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default Credit;
