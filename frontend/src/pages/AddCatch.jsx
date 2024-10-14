// src/pages/AddCatch.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCatch } from '../store/catchSlice';
import { useNavigate } from 'react-router-dom';

function AddCatch() {
  const [species, setSpecies] = useState('');
  const [size, setSize] = useState('');
  const [weight, setWeight] = useState('');
  const [location, setLocation] = useState('');
  const [catchDate, setCatchDate] = useState('');
  const [comments, setComments] = useState('');
  const [photo, setPhoto] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.catches);

  const handleSubmit = (e) => {
    e.preventDefault();
    const catchData = {
      species,
      size: parseFloat(size),
      weight: parseFloat(weight),
      location,
      catch_date: catchDate,
      comments,
      photo_url: photo ? URL.createObjectURL(photo) : null,
    };
    dispatch(addCatch(catchData)).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {
        navigate('/dashboard');
      }
    });
  };

  return (
    <div>
      <h1>Log a New Catch</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          placeholder="Fish Species"
          required
        />
        <input
          type="number"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="Size (inches)"
          required
        />
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight (lbs)"
          required
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          required
        />
        <input
          type="date"
          value={catchDate}
          onChange={(e) => setCatchDate(e.target.value)}
          required
        />
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Comments"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging catch...' : 'Log Catch'}
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default AddCatch;
