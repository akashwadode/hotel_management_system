import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Reservations from './pages/Reservations';
import Customers from './pages/Customers';
import BillPage from './pages/BillsPage';
import './App.css'
import { DataProvider } from './context/DataContext';

const App = () => (
<DataProvider>
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/reservations" element={<Reservations />} />      
      <Route path="/billPage" element={<BillPage />} />      
      
    </Routes>
  </Router>
  </DataProvider>
);

export default App;
