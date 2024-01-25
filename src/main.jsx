import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './ErrorPage.jsx';
import App from './App.jsx'
import Shopping from './Shopping.jsx';
import Cart from './Cart.jsx';

window.cart = [];
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "shopping",
    element: <Shopping />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
