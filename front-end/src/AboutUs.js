// front-end/src/AboutUs.js
import { useEffect, useState } from 'react';
import axios from 'axios';

//front-end .env already has REACT_APP_SERVER_HOSTNAME=http://localhost:5002
const API_BASE = process.env.REACT_APP_SERVER_HOSTNAME || 'http://localhost:5002';

export default function AboutUs() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState('');

  useEffect(() => {
    axios.get(`${API_BASE}/api/about-us`)
      .then(res => setData(res.data))
      .catch(e => setErr(e.message));
  }, []);

  if (err) return <div style={{ padding: 24 }}>Error: {err}</div>;
  if (!data) return <div style={{ padding: 24 }}>Loading…</div>;

  return (
    <div style={{ maxWidth: 920, margin: '32px auto', padding: '0 16px' }}>
      <h1>About Us</h1>
      <img
        src={data.photoUrl}
        alt={data.name}
        style={{ width: 200, height: 200, objectFit: 'cover', borderRadius: '50%', margin: '16px 0' }}
      />
      <h2 style={{ margin: '8px 0 0' }}>{data.name}</h2>
      <p style={{ color: '#666', marginTop: 4 }}>{data.title}</p>
      {data.paragraphs?.map((p, i) => (
        <p key={i} style={{ lineHeight: 1.6 }}>{p}</p>
      ))}
    </div>
  );
}
