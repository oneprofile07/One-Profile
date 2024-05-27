import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  // </BrowserRouter>
  <BrowserRouter>
    {/* <App /> */}
    <GoogleOAuthProvider clientId="789075636203-9loq49mt0j7mdsjeqoej8jsbogua9uuf.apps.googleusercontent.com"> <App /></GoogleOAuthProvider>,

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
