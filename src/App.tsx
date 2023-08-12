import { Provider } from 'react-redux';
import './App.css';
import Layout from './Layout/Layout';
import { store } from './stores/Store';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';




function App() {

  const navigate = useNavigate();
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/') {

      navigate('/home'); // Redirect to the 'home' route
    }
  }, [navigate]);

  return (
    <div className="App">
      <Provider store={store}>
        <Layout ></Layout>
      </Provider>
    </div>
  );
}

export default App;
