import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import HomePage from './HomePage'
import ClientSignup from './ClientComponents/ClientSignup'
import ClientLogin from './ClientComponents/ClientLogin'
import BackLog from './BackLog'
import ForgotPassword from './ForgotPassword'
import EmpLogin from './EmployeeComponents/EmpLogin'
import AdminDashboard from './AdminComponents/AdminDashboard'
import AdminHome from './AdminComponents/AdminHome'
import AdminLogin from './AdminComponents/AdminLogin'
import ClientDashboard from './ClientComponents/ClientDashboard'
import ClientTransaction from './ClientComponents/ClientTransaction'
import EmployeeDashboard from './EmployeeComponents/EmployeeDashboard'
import EmployeeList from './AdminComponents/EmployeeList'
import AddEmployee from './AdminComponents/AddEmployee'
import EditEmployee from './AdminComponents/EditEmployee'
import ClientList from './AdminComponents/ClientList'
import AddClient from './AdminComponents/AddClient'
import EditClient from './AdminComponents/EditClient'
import ClientAccounts from './EmployeeComponents/ClientAccounts'
import Debit from './EmployeeComponents/Debit'
import Credit from './EmployeeComponents/Credit'
import Transactions from './EmployeeComponents/Transactions'
import EmpHome from './EmployeeComponents/EmpHome'
import LogoutButton from '../Logout';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/signup' element={<ClientSignup/>}></Route>
      <Route path='/login' element={<ClientLogin/>}></Route>
      <Route path='/backlog' element={<BackLog/>}></Route>
      <Route path='/reset' element={<ForgotPassword/>}></Route>
      <Route path='/adlogin' element={<AdminLogin/>}></Route>
      <Route path='/emplogin' element={<EmpLogin/>}></Route>
      <Route path="/dashboard/:clientId" element={<ClientDashboard />} />
      <Route path="/logout" element={<LogoutButton/>} />
      <Route path='/transactions/:id' element={<ClientTransaction/>}></Route>
  

      <Route path='/ad_dashboard' element={<AdminDashboard/>}>
      <Route path='' element={<AdminHome/>}></Route>
      <Route path='/ad_dashboard/employee' element={<EmployeeList/>}></Route>
      <Route path='/ad_dashboard/add_employee' element={<AddEmployee/>}></Route>
      <Route path='/ad_dashboard/edit_employee/:id' element={<EditEmployee/>}></Route>
      <Route path='/ad_dashboard/client' element={<ClientList/>}></Route>
      <Route path='/ad_dashboard/add_client' element={<AddClient/>}></Route>
      <Route path='/ad_dashboard/edit_client/:id' element={<EditClient/>}></Route>
      </Route>
      <Route path='/dashboards' element={<EmployeeDashboard/>}>
      <Route path='' element={<EmpHome/>}></Route>
      <Route path='/dashboards/clientaccounts' element={<ClientAccounts/>}></Route>
      <Route path='/dashboards/transactions' element={<Transactions/>}></Route>
      <Route path='/dashboards/credit/:clientId' element={<Credit/>}></Route>
      <Route path='/dashboards/debit/:clientId' element={<Debit/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
