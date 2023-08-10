import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import AuthenticatedLayout from './Layout/Authenticated/AuthenticatedLayout';
import Home from './Layout/Authenticated/Pages/Home/Home';
import PetGuide from './Layout/Authenticated/Pages/PetGuide/PetGuide';
import PetGuideDetail from './Layout/Authenticated/Pages/PetGuideDetail/PetGuideDetail';
import ProductPage from './Layout/Authenticated/Pages/ProductPage/ProductPage';
import Shop from './Layout/Authenticated/Pages/Shop/Shop';
import Layout from './Layout/Layout';
import './index.css';
import reportWebVitals from './reportWebVitals';
const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />),
    children: [
      {
        path: '',
        element: (<Layout></Layout>),

        children: [
          {
            path: '',
            element: (<AuthenticatedLayout></AuthenticatedLayout>),

            children: [
              {
                path: 'home',
                element: (<Home></Home>)
              },
              {
                path: 'shop',
                element: (<Shop></Shop>)
              },
              {
                path: 'petguide',
                element: (<PetGuide></PetGuide>),
              },
              {
                path: 'petguide/:id',
                element: (<PetGuideDetail></PetGuideDetail>),

              },
              {
                path: 'profile/:id',
                element: (<ProductPage></ProductPage>),

              },

            ]

          },



        ]
      }
    ]
  }
]


);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
