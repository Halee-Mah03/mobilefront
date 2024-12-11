import React, { useEffect, useState } from "react";

const AdminHome = () => {
  const [adminName, setAdminName] = useState("");
  const [adminCount, setAdminCount] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [salaryTotal, setSalaryTotal] = useState(0);
  const [clientBalanceTotal, setClientBalanceTotal] = useState(0);

  useEffect(() => {
    // Retrieve data from localStorage
    setAdminName(localStorage.getItem("adminName") || "Admin");
    setAdminCount(localStorage.getItem("adminCount") || 0);
    setEmployeeCount(localStorage.getItem("employeeCount") || 0);
    setClientCount(localStorage.getItem("clientCount") || 0);
    setSalaryTotal(localStorage.getItem("salaryTotal") || 0);
    setClientBalanceTotal(localStorage.getItem("clientBalanceTotal") || 0);
  }, []);
  
  
  return (
<div className="bg-white-300 font-[sans-serif]">
    <div className='grid md:grid-cols-3 gap-6 min-h-[164px] py-8 p-16 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 font-sans tracking-wide'>
      <div className="md:col-span-2">
      <h1 className="text-3xl font-bold text-white text-text">Welcome {adminName} </h1>
      <p className="text-base text-white mt-4">Your seamless management service</p>
      </div>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto py-16'>
          <div className=" rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
            <div className="p-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
  <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
</svg>
              <h3 className="text-white-800 text-xl font-semibold mb-3">Administrators</h3>
              <h4 className="text-white-500 text-sm leading-relaxed">{adminCount}</h4>
            </div>
          </div>

    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
            <div className="p-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
</svg>
              <h3 className="text-gray-800 text-xl font-semibold mb-3">Employees</h3>
              <h4 className="text-gray-500 text-sm leading-relaxed">{employeeCount}</h4>
            </div>
    </div>

    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
            <div className="p-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
</svg>
              <h3 className="text-gray-800 text-xl font-semibold mb-3">Customers</h3>
              <h4 className="text-gray-500 text-sm leading-relaxed">{clientCount}</h4>
            </div>
    </div>
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
            <div className="p-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
</svg>
              <h3 className="text-gray-800 text-xl font-semibold mb-3"> Employees Salary</h3>
              <h3 className="text-gray-500 text-sm leading-relaxed">${salaryTotal}</h3>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
            <div className="p-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
</svg>
              <h3 className="text-gray-800 text-xl font-semibold mb-3"> Customers Balance</h3>
              <h3 className="text-gray-500 text-sm leading-relaxed">${clientBalanceTotal}</h3>
            </div>
          </div>
    </div>
    </div>
  )
}

export default AdminHome