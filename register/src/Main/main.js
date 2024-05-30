import React, { useState } from 'react';
import './main.css';
import axios from 'axios';

const Main = () => {
  const [companyName, setCompanyName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      companyName,
      ownerName,
      rollNo,
      ownerEmail,
      accessCode
    };

    try {
      const res = await axios.post('http://20.244.56.14/test/register', data);
      setResponse(res.data);
    } catch (error) {
      console.error('Error registering:', error);
      setResponse({ error: 'Registration failed' });
    }
  };

  return (
    <div className='register'>
      <h1>Register Company</h1>
      <form onSubmit={handleSubmit}>
        <div className='register-company'>
          <label>Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div className='register-owner'>
          <label>Owner Name:</label>
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
          />
        </div>
        <div className='register-roll'>
          <label>Roll Number:</label>
          <input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            required
          />
        </div>
        <div className='register-email'>
          <label>Owner Email:</label>
          <input
            type="email"
            value={ownerEmail}
            onChange={(e) => setOwnerEmail(e.target.value)}
            required
          />
        </div>
        <div className='register-code'>
          <label>Access Code:</label>
          <input
            type="text"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {response && (
        <div className='register-response'>
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Main;
