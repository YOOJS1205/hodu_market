import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/reset.css';
import './style/app.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
