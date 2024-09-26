import React from 'react'
// import './sidebar.css'
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;
 
const AdminSidebar = () => {
  return (
    <div>
      <Sider class=" bg-[#f1f8ff] text-lg font-semibold mt-[70px] sider w-[189px] h-screen pl-[22px] text-[18px] " >
        <br />
        <Link className="text-[#014D4E] block mb-2" to="/admindashboard">Dashboard</Link>
        <Link className="text-[#014D4E] block mb-2" to="/suppliersearch">SupplierSearch</Link>
        
      </Sider>
    </div>
  )
}
 
export default AdminSidebar