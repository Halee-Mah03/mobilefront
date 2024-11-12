import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ClientList = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/auth/list')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/auth/delete_client/${id}`)
      .then(response => {
        if (response.data.Status) {
          window.location.reload();
        } else {
          setError(response.data.Error);
        }
      })
      .catch(error => {
        setError('Failed to delete client');
      });
    };
  

  return (
    <div>
      <div className='flex justify-center py-5'>
        <h3 className='font-bold'>CUSTOMERS LIST</h3>
        <div className='fixed bottom-0 right-0 h-16 w-16'>
        <button type="button" onClick={() => {navigate ('/ad_dashboard/add_client')}}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-9">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
      </button>
        </div>
      </div>
      <div className='font-[sans-serif] overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-600'>
          <thead className="bg-gray-800 text-white whitespace-nowrap">
            <tr>
            <th className="p-4 text-left text-sm font-medium text-blue">Client ID</th>
            <th className="p-4 text-left text-sm font-medium text-blue">Name</th>
            <th className="p-4 text-left text-sm font-medium text-blue">Email</th>
            <th className="p-4 text-left text-sm font-medium text-blue">Address</th>
            <th className="p-4 text-left text-sm font-medium text-blue">Account Number</th>
            <th className="p-4 text-left text-sm font-medium text-blue">Account Type</th>
            <th className="p-4 text-left text-sm font-medium text-blue">Balance</th>
            <th className="p-4 text-left text-sm font-medium text-blue">Actions</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-600 whitespace-nowrap'>
            {
              data.map(item => (
                <tr key={item.client_id} className='even:bg-blue-50'>
                  <td className='p-4 text-sm text-black'>{item.client_id}</td>
                  <td className='p-4 text-sm text-black'>{item.first_name} {item.last_name}</td>
                  <td className='p-4 text-sm text-black'>{item.email}</td>
                  <td className='p-4 text-sm text-black'>{item.address}</td>
                  <td className='p-4 text-sm text-black'>{item.account_number}</td>
                  <td className='p-4 text-sm text-black'>{item.account_type}</td>
                  <td className='p-4 text-sm text-black'>{item.balance}</td>
                  <td className='py-4 text-sm text-gray-800'>
                    <div className=' w-max bg-white-900 border-2 flex overflow-hidden mx-auto'>
                    <button onClick={() => {navigate('/ad_dashboard/edit_client/' +item.client_id)}}
                   className=" px-3 py-2 flex items-center text-sm outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="currentColor" clasName="w-6 hover:fill-gray-700" viewBox="0 0 24 24">
          <path d="m20 8.6-8.38 8.38c-.29.29-.67.47-1.08.51l-2.93.27H7.5c-.33 0-.65-.13-.88-.37-.26-.26-.39-.63-.36-1l.27-2.93c.04-.41.22-.79.51-1.08L15.4 4zm1.94-5.83-.71-.71a2.758 2.758 0 0 0-3.89 0l-.88.88 4.6 4.6.88-.88a2.732 2.732 0 0 0 0-3.88zm-1.19 16.24V13.2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5.81c0 1.24-1.01 2.25-2.25 2.25H5c-1.24 0-2.25-1.01-2.25-2.25V7c0-1.24 1.01-2.25 2.25-2.25h5.81c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H5C2.93 3.25 1.25 4.93 1.25 7v12c0 2.07 1.68 3.75 3.75 3.75h12c2.07 0 3.75-1.68 3.75-3.75z" data-original="#000000" />
        </svg>
              </button>
              <button className="text-red-600 px-3 py-2 flex items-center text-sm  outline-none" onClick={() => handleDelete(item.client_id)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                  <path
                    d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                    data-original="#000000" />
                  <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                    data-original="#000000" />
                </svg>
              </button>
                    </div>
                  </td>
                </tr>     
              ))
            }
          </tbody>
        </table>
        {error && <p style={{ color: 'red' }}>{error}</p>}

      </div>
      </div>
  )
}

export default ClientList