// frontend/src/components/LogList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LogList = ({ token }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/logs', { headers: { Authorization: token } });
        setLogs(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchLogs();
  }, [token]);

  return (
    <div>
      {logs.map((log) => (
        <div key={log.id}>
          <h3>{log.fish_type}</h3>
          <p>{log.weight} kg - {log.location}</p>
          <p>Date: {log.date}</p>
        </div>
      ))}
    </div>
  );
};

export default LogList;
