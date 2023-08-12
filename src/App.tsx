import { Provider } from 'react-redux';
import './App.css';
import Layout from './Layout/Layout';
import { store } from './Store/Store';




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
