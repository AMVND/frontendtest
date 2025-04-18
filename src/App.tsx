import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import { Routes, Route } from 'react-router-dom';
import AppSidebar from './components/AppSidebar';
import AppHeader from './components/AppHeader';
import routeConfig from './routes/routeConfig';

const { Content, Sider } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} collapsedWidth="0" style={{ overflow: 'auto' }}     >
        <AppSidebar />
      </Sider >
      <Layout>
        <AppHeader collapsed={collapsed} toggleCollapsed={() => setCollapsed(!collapsed)} />
        <Content
          style={{
            margin: '24px 16px 0',
            height: 'calc(100vh - 128px)',
            overflow: 'auto',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: '100%',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              {routeConfig.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
              <Route path="*" element={<div>Trang không tồn tại</div>} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;