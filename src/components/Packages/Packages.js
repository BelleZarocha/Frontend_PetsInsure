import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Packages() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:8000/packages');
      setData(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>{item.cost}</div>
          <div>{item.description}</div>
        </div>
      ))}
    </div>
  );
}

export default Packages;