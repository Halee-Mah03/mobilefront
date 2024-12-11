import axios from 'axios';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import LogoutButton from '../../Logout';

const AdminDashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col w-60 bg-gray-800 text-white fixed top-0 left-0 h-screen">
        <div className="flex-1 mt-20 px-4 py-6 space-y-4">
          <button
            type="button"
            onClick={() => navigate('/ad_dashboard')}
            className="flex items-center px-4 py-3 hover:bg-gray-700 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Dashboard
          </button>

          <button
            type="button"
            onClick={() => navigate('/ad_dashboard/employee')}
            className="flex items-center px-4 py-3 hover:bg-gray-700 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            Manage Staff
          </button>

          <button
            type="button"
            onClick={() => navigate('/ad_dashboard/client')}
            className="flex items-center px-4 py-3 hover:bg-gray-700 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            Manage Client
          </button>
        </div>

        {/* Logout Button at the Bottom */}
        <div className="px-4 py-4 border-t border-gray-700">
          <LogoutButton />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-60">
        <div className="p-5 shadow-xl">
          <h1 className="text-center font-bold font-serif text-2xl">
            ADMINISTRATION MANAGEMENT SYSTEM
          </h1>
        </div>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
