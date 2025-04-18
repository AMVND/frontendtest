import Dashboard from '../pages/Dashboard';
import { JSX } from 'react';
import About from '../pages/About';

export interface RouteItem {
  path: string;
  element: JSX.Element;
  label: string;

  hidden?: boolean; 
}

const routeConfig: RouteItem[] = [
  {
    path: '/',
    element: <Dashboard />,
    label: 'Dashboard',
  },
  {
    path: '/about',
    element: <About />,
    label: 'About',
  },
];

export default routeConfig;
