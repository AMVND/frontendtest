import React from 'react';
import { Layout, Button } from 'antd';
import {  MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
// import { useLocation } from 'react-router-dom';
// import routeConfig from '../routes/routeConfig';

const { Header } = Layout;

type AppHeaderProps = {
  collapsed: boolean;
  toggleCollapsed: () => void;
};

const AppHeader: React.FC<AppHeaderProps> = ({ collapsed, toggleCollapsed }) => {
 
  // const location = useLocation();
  // const route = routeConfig.find(r => r.path === location.pathname);
  // const title = route?.label || 'Trang';


  return (
    <Header style={{ background: '#fff', paddingLeft: 20 }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleCollapsed}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </Header>
  );
};

export default AppHeader;
