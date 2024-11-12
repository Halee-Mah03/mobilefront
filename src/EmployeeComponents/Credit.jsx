import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Credit = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const transactionData = {
      account_number: accountNumber,
      amount: amount,
      description: description,
    };

    axios.post('http://localhost:3000/emp/credited', transactionData)
      .then((response) => {
        navigate('/dashboards/transactions')
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div className='space-y-2 font-[sans-serif] text-[#333] max-w-md mx-auto mt-9'>
    <header className='text-center text-white bg-[#121533] py-8 px-6 sm:px-10 font-[sans-serif] min-h-[70px]'>
      CUSTOMER CREDIT FORM
  </header>
  <form className='mt-20 space-y-6' onSubmit={handleSubmit}>
  <div>
      <label>Account Number</label>
        <input className='text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-black-500'
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
        />
      </div>
      <div>
      <label>Amount</label>
        <input className='text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-black-500'
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
      <label>Transaction Description</label>
        <input className='text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-black-500'
          type='text'
          placeholder='Enter Transaction Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      
      <div className="!mt-12">
            <button type="submit" className="w-full py-3 px-4 text-m tracking-wider font-semibold rounded-md text-white bg-[#121533] hover:bg-gray-900">
              Credit Account
            </button>
          </div>
    </form>
  </div>

  )
}

export default Credit