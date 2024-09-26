import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AdminLogin from '../pages/Admin/AdminLogin';
import SupplierDashBoard from '../pages/Supplier/DashBoard';
import SupplierSearch from '../pages/Admin/SupplierSearch';
import AdminDashBoard from '../pages/Admin/AdminDashBoard';

 
const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminLogin/>
  },
  {
    path: '/supplierdashboard',
    element:<SupplierDashBoard/>
  },
  {
    path: '/suppliersearch',
    element:<SupplierSearch/>
  },
  {
    path: '/admindashboard',
    element:<AdminDashBoard/>
  }
]);
 
export default router;
