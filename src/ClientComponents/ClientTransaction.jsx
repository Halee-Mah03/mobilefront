import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ClientTransaction = () => {
  const { id } = useParams();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/cli/clientransactions/${id}')
      .then(response => {
        setTransactions(response.data);
      })
      .catch(error => {
        alert(error.message);
      });
  }, [id]);

  return (
<div>
      <h2>Transaction History</h2>
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
    </div>

  )
}

export default ClientTransaction