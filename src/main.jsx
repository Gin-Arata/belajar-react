import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/login';
import RegisterPage from './Pages/register';
import ErrorPage from './Pages/404';
import './index.css'
import ProductPage from './Pages/products';

const router = createBrowserRouter([
  {
    path: '/',
    element: "Hello World!",
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginPage />  
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/products',
    element: <ProductPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
