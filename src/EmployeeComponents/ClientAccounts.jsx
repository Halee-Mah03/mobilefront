import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ClientAccounts = () => {
  const navigate = useNavigate()
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get('https://mobileback-d8at.onrender.com/admin/admin/getclients')
      .then(response => {
        setClients(response.data);
      })
      .catch(error => {
        alert(error.message);
      });
  }, []);
  return (
    <div>
      <div className='flex justify-center py-5'>
        <h3 className='font-bold'>CUSTOMERS ACCOUNTS LIST</h3>
      </div>
      <div className='font-[sans-serif] overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-600'>
          <thead className="bg-gray-900 text-white whitespace-nowrap">
            <tr>
            <th className="p-4 text-left text-sm font-medium text-blue" scope="col">Client ID</th>
            <th className="p-4 text-left text-sm font-medium text-blue" scope="col"> Name</th>
    <th className="p-4 text-left text-sm font-medium text-blue" scope="col">Email</th>
    <th className="p-4 text-left text-sm font-medium text-blue" scope="col">Address</th>
    <th className="p-4 text-left text-sm font-medium text-blue" scope="col">Account Number</th>
    <th className="p-4 text-left text-sm font-medium text-blue" scope="col">Balance</th>
    <th className="p-4 text-left text-sm font-medium text-blue" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-600 whitespace-nowrap'>
            {
       clients.map(client => (
        <tr key={client.client_id} className='even:bg-blue-50'>
          <td className='p-4 text-sm text-black'>{client.id}</td>
          <td className='p-4 text-sm text-black'>{client.firstName} {client.lastName}</td>
          <td className='p-4 text-sm text-black'>{client.email}</td>
          <td className='p-4 text-sm text-black'>{client.address}</td>
          <td className='p-4 text-sm text-black'>{client.accountNumber}</td>
          <td className="p-4 text-sm text-black">{client.balance}</td>
      <td className='py-4 text-sm text-gray-800'>
        <div className='flex border-2 divide-x-2 border-gray-900 w-max mt-2'>
        <button className='px-5 py-2 text-gray-500' onClick={() => navigate(`/dashboards/credit/${client.id}`)}>Credit</button>
        <button className='px-5 py-2 bg-gray-600 text-gray-500' onClick={() => navigate(`/dashboards/debit/${client.id}`)}>Debit</button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      </div>
  )
}

export default ClientAccounts;