import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import UnAuthenticatedLayout from './Layout/UnAuthenticated/UnAuthenticatedLayout';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
const router = createBrowserRouter([
  {
    path: "/",
    element: (<App/>),
    children:[
      {
        path:'/',
        element:(<Layout></Layout>),
        children:[
          {
            path:'',
            element:(<UnAuthenticatedLayout></UnAuthenticatedLayout>)
          },
          {
            path:'auth',
            element:(<UnAuthenticatedLayout></UnAuthenticatedLayout>)
          }
        ]
      }
    ]
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
