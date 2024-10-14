// src/pages/Dashboard.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatches } from '../store/catchSlice';
import { Link } from 'react-router-dom';

function Dashboard() {
  const dispatch = useDispatch();
  const { catches, loading, error } = useSelector((state) => state.catches);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    // Replace `1` with the actual user ID from the token or backend
    dispatch(fetchCatches(1));
  }, [dispatch]);

  return (
    <div>
      <h1>Your Fishing Logbook</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div>
        {catches.map((catchItem) => (
          <div key={catchItem.id}>
            <h3>{catchItem.species}</h3>
            <p>Size: {catchItem.size} inches</p>
            <p>Weight: {catchItem.weight} lbs</p>
            <p>Location: {catchItem.location}</p>
            <p>Date: {new Date(catchItem.catch_date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
      <Link to="/add-catch">Log a New Catch</Link>
    </div>
  );
}

export default Dashboard;
