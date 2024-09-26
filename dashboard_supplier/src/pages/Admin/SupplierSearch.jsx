// import { Button, Layout,Input,Select} from 'antd';
// import { DownloadOutlined } from '@ant-design/icons';
// import React from 'react';

// import Navbar from '../../components/layout/navbar/Navbar';
// import AdminSidebar from '../../components/layout/sidebar/AdminSidebar';

// const SupplierSearch=()=>{
//     const { Header, Content } = Layout;
//     const supplierTypes = ['Seller', 'Supplier'];
//     const countries = ['US', 'Canada', 'India'];
//     return (
//         <div data-testid="dashboard">
//           <Layout>
//             <Navbar />
//             <Layout>
//              <AdminSidebar/>
//               <Content style={{ backgroundColor: '#FFFFFF', position: 'relative' }}>
                
//                 <Content className="ml-[45px] pt-[17px] bg-[#f1f8ff] mt-[130px] rounded-[20px] w-[920px] h-[420px] border-[1px] border-[#014D4E]">
//                 <Content className="ml-[37px] pt-[17px] bg-[#FFFFFF] mt-[35px] rounded-[20px] w-[850px] h-[235px] border-dotted border-[2px] border-black gap-2 flex flex-wrap">
//                 {/* First Row of Inputs */}
//                 <div className="ml-[15px] w-full flex gap-2">
//                   {/* Label and Input for Company Name */}
//                   <div className="flex flex-col w-[calc(33%-8px)]">
//                     <span className="text-md font-bold text-[#014D4E] mb-1">Company Name</span>
//                     <Input placeholder="Company Name" className="w-full size-middle" />
//                   </div>

//                   {/* Label and Input for Supplier ID */}
//                   <div className="flex flex-col w-[calc(33%-8px)]">
//                     <span className="text-md font-bold text-[#014D4E] mb-1">Supplier ID</span>
//                     <Input placeholder="Supplier ID" className="w-full" />
//                   </div>

//                   {/* Label and Input for Supplier Type */}
//                   <div className="flex flex-col w-[calc(33%-8px)]">
//                     <span className="text-md font-bold text-[#014D4E] mb-1">Supplier Type</span>
//                     <Select
//                       mode="multiple"
//                       placeholder="Select Supplier Type"
//                       className="w-full"
//                       options={supplierTypes.map(type => ({ label: type, value: type }))}
//                     />
//                   </div>
//                 </div>

//                 {/* Second Row for the Next Input */}
//                 <div className="ml-[15px] w-full flex gap-2 mt-2">
//                   {/* Label and Input for Country Code */}
//                   <div className="flex flex-col w-[calc(33%-8px)]">
//                     <span className="text-md font-bold text-[#014D4E] mb-1">Country Code</span>
//                     <Select
//                       mode="multiple"
//                       placeholder="Select Country Code"
//                       className="w-full"
//                       options={countries.map(country => ({ label: country, value: country }))}
//                     />
//                   </div>
//                 </div>
//               </Content>
//               <div className=" flex justify-end mt-[30px] mr-[20px]">
//                   <Button className='text-lg font-bold w-[130px] h-[50px] border-[1px] border-[#014D4E]'  shape="round" >
//                    Apply Filter
//                   </Button>
//                 </div>
//                 </Content>
//               </Content>
//             </Layout>
//           </Layout>
//         </div>
//       );

// };
// export default SupplierSearch;
import { Button, Layout, Input, Select } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';

import Navbar from '../../components/layout/navbar/Navbar';
import AdminSidebar from '../../components/layout/sidebar/AdminSidebar';

const SupplierSearch = () => {
  const { Content } = Layout;
  const supplierTypes = ['Seller', 'Supplier'];
  const countries = ['US', 'Canada', 'India'];

  const [companyName, setCompanyName] = useState('');
  const [supplierID, setSupplierID] = useState('');
  const [selectedSupplierTypes, setSelectedSupplierTypes] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('supplierSearchData'));
    if (savedData) {
      setCompanyName(savedData.companyName || '');
      setSupplierID(savedData.supplierID || '');
      setSelectedSupplierTypes(savedData.selectedSupplierTypes || []);
      setSelectedCountries(savedData.selectedCountries || []);
    }
  }, []);

  const handleApplyFilter = () => {
    const dataToSave = {
      companyName,
      supplierID,
      selectedSupplierTypes,
      selectedCountries,
    };
    localStorage.setItem('supplierSearchData', JSON.stringify(dataToSave));
    console.log(dataToSave);
    
  };

  return (
    <div data-testid="dashboard">
      <Layout>
        <Navbar />
        <Layout>
          <AdminSidebar />
          <Content style={{ backgroundColor: '#FFFFFF', position: 'relative' }}>
            <Content className="ml-[45px] pt-[17px] bg-[#f1f8ff] mt-[130px] rounded-[20px] w-[920px] h-[420px] border-[1px] border-[#014D4E]">
              {/* <Content className="ml-[37px] pt-[17px] bg-[#FFFFFF] mt-[35px] rounded-[20px] w-[850px] h-[235px] border-dotted border-[2px] border-black gap-2 flex flex-wrap">
                <div className="ml-[15px] w-full flex gap-2">
                  <div className="flex flex-col w-[calc(33%-8px)]">
                    <span className="text-md font-bold text-[#014D4E] mb-1">Company Name</span>
                    <Input
                      placeholder="Company Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full size-middle"
                    />
                  </div>

                  <div className="flex flex-col w-[calc(33%-8px)]">
                    <span className="text-md font-bold text-[#014D4E] mb-1">Supplier ID</span>
                    <Input
                      placeholder="Supplier ID"
                      value={supplierID}
                      onChange={(e) => setSupplierID(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div className="flex flex-col w-[calc(33%-8px)]">
                    <span className="text-md font-bold text-[#014D4E] mb-1">Supplier Type</span>
                    <Select
                      mode="multiple"
                      placeholder="Select Supplier Type"
                      className="w-full"
                      value={selectedSupplierTypes}
                      onChange={setSelectedSupplierTypes}
                      options={supplierTypes.map(type => ({ label: type, value: type }))}
                    />
                  </div>
                </div>

                <div className="ml-[15px] w-full flex gap-2 mt-2">
                  <div className="flex flex-col w-[calc(33%-8px)]">
                    <span className="text-md font-bold text-[#014D4E] mb-1">Country Code</span>
                    <Select
                      mode="multiple"
                      placeholder="Select Country Code"
                      className="w-full"
                      value={selectedCountries}
                      onChange={setSelectedCountries}
                      options={countries.map(country => ({ label: country, value: country }))}
                    />
                  </div>
                </div>
              </Content> */}
              {/* <div className="flex justify-end mt-[30px] mr-[20px]">
                <Button
                  className='text-lg font-bold w-[130px] h-[50px] border-[1px] border-[#014D4E]'
                  shape="round"
                  onClick={handleApplyFilter}
                >
                  Apply Filter
                </Button>
              </div> */}
            </Content>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default SupplierSearch;
