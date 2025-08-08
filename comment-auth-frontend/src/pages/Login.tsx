import { useState } from 'react';
import axios from 'axios';
import { saveToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUser] = useState('');
  const [password, setPass] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
    saveToken(res.data.token);
    navigate('/comments');
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setUser(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPass(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
