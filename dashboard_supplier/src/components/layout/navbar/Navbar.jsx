import React from 'react';
import { Button, Layout } from 'antd';
import { UserOutlined} from '@ant-design/icons';

import icon1 from  '../../../assets/icons/sustainability_logo.png';
import { TEXT_CONSTANTS } from '../../../constants/textConstants';

const { Header } = Layout;

const Navbar = () => {
  return (
    <div>
      <Header className="fixed flex z-20  bg-[#014D4E] text-white h-[70px] pl-[20px] pr-[20px] w-screen  font-inter font-semibold text-4xl">
        <div className="flex items-center">
        </div>
        <div className="text-center flex-grow pt-[15px] flex items-center justify-center">
          <img 
            src={icon1}
            alt="Logo" 
            className="h-[50px] w-[50px] mr-2"
          />
          {TEXT_CONSTANTS.HEADER_TEXT}
        </div>
        <div>
          <Button className="h-[48px] w-[48px] rounded-full text-[25px] bg-white text-black flex items-center justify-center mr-[60px] mt-3">
            <UserOutlined />
          </Button>
        </div>
      </Header>
    </div>
  );
}

export default Navbar;
