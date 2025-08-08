// src/pages/Signup.tsx

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../utils/auth';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', {
        username,
        password,
      });

      saveToken(res.data.token);
      navigate('/comments');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign Up</h2>
      <form onSubmit={handleSignup} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Create Account</button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '400px',
    margin: '60px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #aaa',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: '10px',
  },
};

export default Signup;
