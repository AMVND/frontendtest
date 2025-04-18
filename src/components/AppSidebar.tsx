import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import routeConfig from '../routes/routeConfig';

const AppSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = routeConfig
    .filter(route => !route.hidden)
    .map(route => ({
      key: route.path,
      label: route.label,
    }));

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[location.pathname]}
      onClick={({ key }) => navigate(key)}
      items={menuItems}
    />
  );
};

export default AppSidebar;
