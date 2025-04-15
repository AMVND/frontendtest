import React, { useEffect, useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useNavigate, Routes, Route } from 'react-router-dom';



const { Header, Content, Footer, Sider } = Layout;


const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);

const App: React.FC = () => {
  //collapse style
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  //navigate
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Giả lập gọi API
    const fetchMenuItems = async () => {
      const data = [
        { key: '1', label: 'Dashboard', path: '/dashboard' },
        { key: '2', label: 'Videos', path: '/videos' },
        { key: '3', label: 'Uploads', path: '/uploads' },
      ];
      const formatted = data.map((item) => ({
        key: item.path, // dùng path làm key luôn
        label: item.label,
      }));
      setMenuItems(formatted);
    };
    fetchMenuItems();
  }, []);

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key); // key chính là đường dẫn
  };


  return (
    <Layout>
      <Sider style={siderStyle}
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth="0"
      >
        <div className="demo-logo-vertical" />
        <Menu  theme="dark"
          mode="inline"
          defaultSelectedKeys={['/dashboard']}
          items={menuItems}
          onClick={handleMenuClick} />
      </Sider>
      <Layout>
        {/* Header */}
        <Header style={{ padding: 0, background: colorBgContainer }} >
          {/* collapsed button */}
          <Button type="text"
            icon={collapsed ? "> Etpm" : "< Etpm"}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          {/* Name */}
          {/* Language */}
        </Header>
        {/* Content */}
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/dashboard" element={<div>Trang Dashboard</div>} />
              <Route path="/videos" element={<div>Trang Videos</div>} />
              <Route path="/uploads" element={<div>Trang Uploads</div>} />
              <Route path="*" element={<div>Trang không tồn tại</div>} />
            </Routes>
          </div>
        </Content>
        {/* Footer */}
        <Footer style={{ textAlign: 'center' }}>
          TEXT
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;