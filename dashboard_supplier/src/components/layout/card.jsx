import { Button, Card, Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

// Common text styles
const commonTextStyle = {
  fontSize: '13px',
  fontFamily: 'Inter',
  fontWeight: 'medium',
  lineHeight: '15.73px',
  textAlign: 'left',
};

const boldTextStyle = {
  ...commonTextStyle,
  fontWeight: 'bold',
  color: '#2E2E30',
};

const DashCard = ({ icon, title, fields,infoicon }) => {
  return (
    <Card className="relative z-10 w-[245px] h-[267px] ml-[50px] mt-[38px] rounded-[20px] border border-[#d9d9d9]">
      <div className="flex items-center whitespace-normal">
        <div className="flex items-center justify-center w-[40px] h-[40px] rounded-[8px] border-2 border-[#01002A] bg-white mr-[10px]">
          <img src={icon} alt="Custom Icon" className="w-[24px] h-[24px]" />
        </div>
        <Title
          level={4}
          className="m-0 text-[#2E2E30] font-[Inter] text-[16px] font-bold leading-[19.36px] text-left whitespace-normal break-words"
        >
          {title}
        </Title>
        <div className="flex items-center justify-center w-[40px] h-[40px] rounded-[8px]  bg-white mr-[10px]">
          <img src={infoicon} alt="Custom Icon" className="w-[24px] h-[24px]" />
        </div>
      </div>
      {fields.map(({ label, value }, index) => (
        <div className="mb-[16px]" key={index}>
          <Text style={commonTextStyle}>{label}:</Text>
          <Text style={boldTextStyle} className="mt-[5px] float-right">
            {value}
          </Text>
        </div>
      ))}
      <Button className="w-[150px] ml-[20px] bg-[#014D4E4D] text-[#014D4E] hover:bg-[#014D4E] hover:text-white">
        Details
      </Button>
    </Card>
  );
};

export default DashCard;



