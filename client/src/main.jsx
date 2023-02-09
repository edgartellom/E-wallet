import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = 'https://sphoenix-production.up.railway.app/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
)
