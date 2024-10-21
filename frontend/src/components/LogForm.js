// frontend/src/components/LogForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LogForm = ({ token }) => {
  const [fishType, setFishType] = useState('');
  const [weight, setWeight] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/logs', 
        { fishType, weight, location, date }, 
        { headers: { Authorization: token } });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={fishType} onChange={(e) => setFishType(e.target.value)} placeholder="Fish Type" />
      <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" />
      <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Add Log</button>
    </form>
  );
};

export default LogForm;
