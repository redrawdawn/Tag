import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { PlayerCard } from './components/player/PlayerCard';
import { PlayerList } from './components/player/PlayerList';
import { Navbar } from './components/nav/navbar';
import { Login } from './components/auth/Login';
///import { Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import { Register } from './components/auth/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      

      <Routes>
                //* Render the location list when http://localhost:3000/ */
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/home" element={<PlayerList />} />
      </Routes>
      <Navbar />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
