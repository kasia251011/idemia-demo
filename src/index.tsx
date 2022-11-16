import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import LoginPanel from './components/LoginPanel';
import MainDashboard from './components/mainDashboard/MainDashboard';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPanel/>,
  },
  {
    path: "home",
    element: <MainDashboard />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
