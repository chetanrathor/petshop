import React, { useEffect } from 'react'; // Import React and useEffect
import { Provider } from 'react-redux';
import { store } from './stores/Store';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home'); // Redirect to the 'home' route
    }
  }, [location.pathname, navigate]);

  return (
    <div className="App">
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
