import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Login';
import SignUp from './signup';
import Switch from './switch';
import '@fortawesome/fontawesome-free/css/all.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Switch />
  </React.StrictMode>
);


