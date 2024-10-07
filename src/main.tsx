import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../component/HomePage';
import RegisterPage from '../component/RegisterPage/RegisterPage';
import LoginPage from '../component/LoginPage/LoginPage';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!); // Use non-null assertion operator

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
