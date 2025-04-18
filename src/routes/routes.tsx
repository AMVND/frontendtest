import Dashboard from '../pages/Dashboard';
import { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  { path: '/', element: <Dashboard /> },
  { path: '*', element: <div>Trang không tồn tại</div> },
];

export default routes;
