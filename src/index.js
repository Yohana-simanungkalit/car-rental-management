import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import DashboardPage from './pages/DashboardPage';
import CarListPage from './pages/CarListPage';
import ReservationPage from './pages/ReservationPage';
import NotfoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/dashboard",
    element: <DashboardPage/>
  },
  {
    path: "/car-list",
    element: <CarListPage/>
  },
  {
    path: "reservation",
    element: <ReservationPage/>
  },
  {
    path: "*",
    element: <NotfoundPage/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
