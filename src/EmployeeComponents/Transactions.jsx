import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllTransactionsTable() {
  const [transacts, setTransacts] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/employee/all-transactions');
        setTransacts(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        alert('Failed to load transactions');
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl text-center font-semibold mb-4">All Transactions</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-white">Date</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-white">Client Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-white">Account Number</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-white">Transaction Type</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-white">Amount</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-white">Balance</th>
          </tr>
        </thead>
        <tbody>
          {transacts.map((transact) => (
            <tr key={transact.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="px-4 py-2 text-sm text-gray-800">{new Date(transact.transactionDate).toLocaleDateString()}</td>
              <td className="px-4 py-2 text-sm text-gray-800">{transact.firstName} {transact.lastName}</td>
              <td className="px-4 py-2 text-sm text-gray-800">{transact.clientId}</td>
              <td className="px-4 py-2 text-sm text-gray-800">{transact.transactionType}</td>
              <td className="px-4 py-2 text-sm text-gray-800">${parseFloat(transact.amount).toFixed(2)}</td>
              <td className="px-4 py-2 text-sm text-gray-800">${parseFloat(transact.balance).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );  
}

export default AllTransactionsTable;
