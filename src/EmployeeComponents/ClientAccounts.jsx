import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ClientAccounts = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/emp/client')
      .then(response => {
        setData(response.data);
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
            <th className="p-4 text-left text-sm font-medium text-blue" scope="col">Client Name</th>
    <th className="p-4 text-left text-sm font-medium text-blue" scope="col">Email</th>
    <th className="p-4 text-left text-sm font-medium text-blue" scope="col">Address</th>
    <th className="p-4 text-left text-sm font-medium text-blue" scope="col">Account Number</th>
    <th className="p-4 text-left text-sm font-medium text-blue" scope="col">Balance</th>
    <th className="p-4 text-left text-sm font-medium text-blue" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-600 whitespace-nowrap'>
            {
              data.map(item => (
                <tr key={item.client_id} className='even:bg-blue-50'>
                  <td key={`client-name-${item.client_id}`} className='p-4 text-sm text-black'>{item.first_name} {item.last_name}</td>
      <td key={`client-email-${item.client_id}`} className='p-4 text-sm text-black'>{item.email}</td>
      <td key={`client-address-${item.client_id}`} className='p-4 text-sm text-black'>{item.address}</td>
      <td key={`client-account-${item.client_id}`} className='p-4 text-sm text-black'>{item.account_number}</td>
      <td key={`client-balance-${item.client_id}`} className='p-4 text-sm text-black'>{item.balance}</td>
      <td key={`client-actions-${item.client_id}`} className='py-4 text-sm text-gray-800'>
        <div className='flex border-2 divide-x-2 border-gray-900 w-max mt-2'>
                   <button type="button" onClick={() => {navigate ('/dashboards/credit')}}
            className='px-5 py-2 text-gray-500'
            aria-label={`View credit information for ${item.first_name} ${item.last_name}`}
          >
            Credit
          </button>
          <button onClick={() => {navigate('/dashboards/debit/:id') + (item.id)}}
            className='px-5 py-2 text-white bg-gray-800'
            aria-label={`View debit information for ${item.first_name} ${item.last_name}`}
          >
            Debit
          </button>
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

export default ClientAccounts