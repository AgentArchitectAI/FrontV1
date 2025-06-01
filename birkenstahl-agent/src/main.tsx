import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Homepage2 from './pages/Homepage2';
import LoginPage from './pages/Loginpage'; 
import RegisterPage from './pages/Registerpage';
import DashboardPage from './pages/DashboardPage';
import Perfilpage from './pages/Perfilpage';
import ProjectPage from './pages/Proyectpage'; 
import Playgroundpage from './pages/Playgroundpage';
import AgentsPage from './pages/Agentspage';
import PrivateRoute from './components/PrivateRoute'; 

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homepage2" element={<Homepage2 />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Perfilpage /></PrivateRoute>} />
        <Route path="/project" element={<PrivateRoute><ProjectPage /></PrivateRoute>} />
        <Route path="/playground" element={<PrivateRoute><Playgroundpage /></PrivateRoute>} />
        <Route path="/agents" element={<PrivateRoute><AgentsPage /></PrivateRoute>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
