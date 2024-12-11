import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ClientTransaction = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('https://mobileback-d8at.onrender.com/user/transaction', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        setTransactions(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Transaction History</h2>
      {transactions.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th className='p-4 text-left text-sm font-medium text-blue'>Date</th>
              <th className='p-4 text-left text-sm font-medium text-blue'>Description</th>
              <th className='p-4 text-left text-sm font-medium text-blue'>Amount</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-600 whitespace-nowrap'>
            {transactions.map((transaction) => (
              <tr key={transaction.transaction_id}>
                <td className='p-4 text-sm text-black'>{transaction.date}</td>
                <td className='p-4 text-sm text-black'>{transaction.description}</td>
                <td className='p-4 text-sm text-black'>{transaction.amount}</td>
              </tr>
        ))}
     </tbody>
      </table>
          ) : (
          <p>No transactions found.</p>
        )}
      </div>
);

}

export default ClientTransaction