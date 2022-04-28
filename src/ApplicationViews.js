import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { UserCard } from './components/user/UserCard';
import { PlayerList } from './components/player/PlayerList';
import { Navbar } from './components/nav/navbar';
import { Login } from './components/auth/Login';
///import { Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { Register } from './components/auth/Register';

export const ApplicationViews = ({ setAuthUser, isAuthenticated, clearAuthUser }) => {
    
    const PrivateOutlet = () => {
        console.log("isAuthenticated: " + isAuthenticated.toString())
        return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
    }
    
console.log("rendering ApplicationViews")
    return (
        <Router>


            <Routes>
                <Route path="/login" element={<Login setAuthUser={setAuthUser}/>} />
                <Route path="/register" element={<Register />} />

                <Route path="/" element={<PrivateOutlet />} >
                    <Route path="/home" element={<PlayerList />} />
                    <Route path="/profile" element={<UserCard clearAuthUser={clearAuthUser} />} />
                </Route>
            </Routes>
            <Navbar />
        </Router>
    )
}