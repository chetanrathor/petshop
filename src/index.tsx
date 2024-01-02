import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import AuthenticatedLayout from './Layout/Authenticated/AuthenticatedLayout';
import Home from './Layout/Authenticated/Pages/Home';
import PetGuide from './Layout/Authenticated/Pages/PetGuide';
import PetGuideDetail from './Layout/Authenticated/Pages/PetGuideDetail';
import ProductPage from './Layout/Authenticated/Pages/ProductPage';
import Shop from './Layout/Authenticated/Pages/Shop';
import Layout from './Layout/Layout';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Checkout from './Layout/Authenticated/Pages/Checkout';
import ProductCart from './Layout/Authenticated/Pages/ProductCart';
import ConsultAVet from './features/consultation/components/ConsultAVet';
import { GoogleOAuthProvider } from '@react-oauth/google';
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
                path: 'consult',
                element: (<ConsultAVet></ConsultAVet>)
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
              {
                path: 'shop/:id',
                element: (<ProductPage></ProductPage>),

              },
              {
                path: 'checkout/:id',
                element: (<ProductCart></ProductCart>),

              },
              {
                path: 'payment/',
                element: (<Checkout></Checkout>),

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
  // <GoogleOAuthProvider clientId='776539522023-j8bru3hgob4tq7cnbo2e7p0406o2h57b.apps.googleusercontent.com' >
    <RouterProvider router={router} />
  // <React.StrictMode >
  // </React.StrictMode>
  // </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
