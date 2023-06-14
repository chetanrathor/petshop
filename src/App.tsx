import React, { useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './Layout/Layout';
import { createBrowserRouter } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './Store/Store';
import { isTokenAvailable } from './Layout/Authenticated/Services/AuthService';
import { setIsAuthenticatedFalse } from './Layout/Authenticated/State/AuthSlice';




function App() {
  


  return (
    <div className="App">
      <Provider store={store}>
        <Layout ></Layout>
      </Provider>
    </div>
  );
}

export default App;
