// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';  
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './App';
import './index.css';  

// Create the root element for React
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the App component inside BrowserRouter and Redux Provider
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


