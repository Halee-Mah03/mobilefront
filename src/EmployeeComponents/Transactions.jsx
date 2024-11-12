import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/emp/transactions')
      .then(response => {
        setTransactions(response.data);
      })
      .catch(error => {
        alert(error.message);
      });
  }, []);

  return (
    <div>
    <div className='flex justify-center py-5'>
        <h3 className='font-bold'>TRANSACTIONS HISTORY</h3>
      </div>
    <table className='min-w-full divide-y divide-gray-600'>
      <thead>
        <tr>
          <th className='p-4 text-left text-sm font-medium text-blue'>Transaction ID</th>
          <th className='p-4 text-left text-sm font-medium text-blue'>Date</th>
          <th className='p-4 text-left text-sm font-medium text-blue'>Account Number</th>
          <th className='p-4 text-left text-sm font-medium text-blue'>Type</th>
          <th className='p-4 text-left text-sm font-medium text-blue'>Amount</th>
          <th className='p-4 text-left text-sm font-medium text-blue'>Balance</th>
          <th className='p-4 text-left text-sm font-medium text-blue'>Description</th>
        </tr>
      </thead>
      <tbody className='bg-white divide-y divide-gray-600 whitespace-nowrap'>
        {transactions.map(transaction => (
          <tr key={transaction.transaction_id}>
            <td className='p-4 text-sm text-black'>{transaction.transaction_id}</td>
            <td className='p-4 text-sm text-black'>{transaction.transaction_date}</td>
            <td className='p-4 text-sm text-black'>{transaction.account_number}</td>
            <td className='p-4 text-sm text-black'>{transaction.transaction_type}</td>
            <td className='p-4 text-sm text-black'>{transaction.amount}</td>
            <td className='p-4 text-sm text-black'>{transaction.balance}</td>
            <td className='p-4 text-sm text-black'>{transaction.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default Transactions