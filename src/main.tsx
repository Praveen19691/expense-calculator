// src/main.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../component/HomePage/Homepage';
import RegisterPage from '../component/RegisterPage/RegisterPage';
import LoginPage from '../component/LoginPage/LoginPage';
import ViewPage from '../component/ViewPage/ViewPage';
import AddPage from '../component/AddPage/AddPage';
import DeletePage from '../component/DeletePage/DeletePage';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!); // Use non-null assertion operator

root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
          <Route path="/view" element={<ProtectedRoute element={<ViewPage />} />} />
          <Route path="/add" element={<ProtectedRoute element={<AddPage />} />} />
          <Route path="/delete" element={<ProtectedRoute element={<DeletePage />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
