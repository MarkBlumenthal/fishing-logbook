// frontend/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import LogForm from './components/LogForm';
import LogList from './components/LogList';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        {token && <Route path="/logs" element={<LogList token={token} />} />}
        {token && <Route path="/add-log" element={<LogForm token={token} />} />}
      </Routes>
    </Router>
  );
}

export default App;



