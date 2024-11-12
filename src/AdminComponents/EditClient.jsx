import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditClient = () => {
  const {id} = useParams()
  const [client, setClient] = useState({
      first_name: '',
      last_name: '',
      email: '',
      address: '',
    });

    const navigate = useNavigate()

useEffect(()=> {
  axios.get('http://localhost:3000/auth/clients/' +id)
  .then(result => {
      setClient({
          ...client,
          first_name: result.data.Result[0].first_name,
          last_name: result.data.Result[0].last_name,
          email: result.data.Result[0].email,
          address: result.data.Result[0].address,

      })
  }).catch(err => console.log(err))
}, [])

const handleSubmit = (e) => {
  e.preventDefault()
  axios.put('http://localhost:3000/auth/edit_client/' +id, client)
  .then(result => {
      if(result.data.Status) {
          navigate('/ad_dashboard/client')
      }else {
          alert(result.data.Error)
      }
  }).catch(err => console.log(err))
}
  return (
    <form onSubmit={handleSubmit} className=' max-w-md w-full mx-auto shadow-[0_2px_10px_-2px_rgba(195,169,50,0.5)] p-8 relative mt-12'>
      <div className='space-y-4'>
        <div className="flex items-center">
        <input type='text' placeholder='Enter First Name' id='inputfirst_name' className='bg-gray-100 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-gray-300 transition-all'
        value={client.first_name}
     onChange={(e) => setClient({...client, first_name: e.target.value})}/>
      </div>

      <div className="flex items-center">
        <input type='text' placeholder='Enter Last Name' id='inputlast_name' className='bg-gray-100 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-gray-300 transition-all'
        value={client.last_name}
     onChange={(e) => setClient({...client, last_name: e.target.value})}/>
      </div>

      <div className='flex items-center'>
      
      <input type='email' placeholder='Enter Email' autoComplete='off' id='inputemail'  className='bg-gray-100 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-gray-300 transition-all'
      value={client.email}
       onChange={(e) => setClient({...client, email: e.target.value})}/>
      </div>


      <div className='flex items-center'>
      
      <input type='text' placeholder='Enter Address' id='inputaddress' autoComplete='off' className='bg-gray-100 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-gray-300 transition-all'
      value={client.address} 
       onChange={(e) => setClient({...client, address: e.target.value})}/>
      </div>
</div>
        <div>
            <button type='submit' className='mt-7 ml-9 bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline'>
                Edit client
            </button>
        </div>
        </form>
  )
}

export default EditClient