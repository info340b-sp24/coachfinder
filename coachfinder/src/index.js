import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './components/reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css'
import LoginComponent from './components/login';
import RegisterComponent from './components/register';
import home from './components/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <RegisterComponent />
  </React.StrictMode>
);

// root.render(
//   <React.StrictMode>
//     <App />
//     <home />
//   </React.StrictMode>
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
