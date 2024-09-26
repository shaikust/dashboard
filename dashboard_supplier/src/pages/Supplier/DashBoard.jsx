import { Button, Layout} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import React from 'react';

import Navbar from '../../components/layout/navbar/Navbar';
import Sidebar from '../../components/layout/sidebar/Sidebar';
import icon1 from "../../assets/icons/carbonemission_icon.png";
import icon2 from "../../assets/icons/recycle_icon.png";
import icon3 from "../../assets/icons/carbonreported_icon.png";
import icon4 from "../../assets/icons/info_icon.png"
import './DashBoard.css';
import DashCard from '../../components/layout/card';
import {TEXT_CONSTANTS} from '../../constants/textConstants'

const { Header, Content } = Layout;

const SupplierDashBoard = () => {
  return (
    <div data-testid="dashboard">
      <Layout>
        <Navbar />
        <Layout>
          <Sidebar />
          <Content style={{ backgroundColor: '#FFFFFF', position: 'relative' }}>
            <div className="absolute top-[80px] left-[20px] flex justify-between">
              <div className="text-[28px] font-medium leading-[32.81px] tracking-[-0.02em] text-[#014D4E]">
                {/* Thank you for attending our carbon emission survey */}
                {TEXT_CONSTANTS.DASHBOARD_TITLE}
              </div>
              <Button
                type="primary"
                shape="round"
                icon={<DownloadOutlined />}
                size="60px"
                className="ml-[130px] w-[175px] bg-[#014D4E]"
              >
                {TEXT_CONSTANTS.DOWNLOAD_BUTTON}
              </Button>
            </div>
            <div className="absolute top-[126px] ml-[25px] text-[20px] font-medium leading-[23.44px] tracking-[-0.02em] text-[#014D4E] text-left">
              {TEXT_CONSTANTS.KPI_SUMMARY}
            </div>
            <Header className="ml-[18px] mt-[170px] rounded-t-[20px] bg-[#014D4E] text-white w-[990px] h-[40px] shadow-md">
              <h1 className="text-base font-medium ml-[-30px]">{TEXT_CONSTANTS.KPI_TRACKER}</h1>
            </Header>
            <Content className="ml-[18px] pt-[17px] bg-white mb-[17px] rounded-b-[20px] w-[990px] h-[390px] shadow-md flex">
            <DashCard
              icon={icon1}
              title="Carbon Emission"
              infoicon={icon4}
              fields={[
                { label: 'Emission Avoided', value: '80' },
                { label: 'LY Emission Avoided', value: '70' },
                { label: '% Changed', value: '12%' },
              ]}
            />
            <DashCard
              icon={icon2}
              title="Recycle Packaging"
              infoicon={icon4}
              fields={[
                { label: 'Recyclable Packaging', value: '80' },
                { label: 'LY Recyclable Packaging', value: '70' },
                { label: '% Changed', value: '12%' },
              ]}
            />
            <DashCard
              icon={icon3}
              title="Carbon Reported"
              infoicon={icon4}
              fields={[
                { label: 'Emission', value: '80' },
                { label: 'LY Emission', value: '70' },
                { label: '% Changed', value: '12%' },
              ]}
            />
            </Content>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default SupplierDashBoard;



