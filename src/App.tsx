import React, { useEffect } from 'react'; // Import React and useEffect
import { Provider } from 'react-redux';
import { store } from './stores/Store';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home'); // Redirect to the 'home' route
    }
  }, [location.pathname, navigate]);

  const stripePromise = loadStripe('pk_test_51Ne2HsSJWBez7tD47Y1veUV1csEi2oNIpq56oEh0KTY29lxhAIZjhwLkkonGccQb3uSEvZZpA819LrtN8oCByrgm008IcC7hyF')

  useEffect(()=>{

  //   setTimeout(() => {
  //  navigate({pathname})
  //   }, 1000);
  })

  return (
    <div className="App">
      <Elements stripe={stripePromise} options={{ clientSecret: 'pi_3OKShCSJWBez7tD41NdCBrSp_secret_feCwN4ypk2oEvAHt6ykKTUuic', }} >
        <Provider store={store}>
          <Layout />
        </Provider>
      </Elements>
    </div>
  );
}

export default App;
