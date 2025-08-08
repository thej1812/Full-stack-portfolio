import { useState } from 'react';
import axios from 'axios';
import { saveToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import Particles from "@/assets/Particles/Particles";
import './login.css';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password
      });

      saveToken(res.data.token);
      navigate('/comments');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 0 }}>
              <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={100}
                particleSpread={10}
                speed={0.05}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              />
            </div>
      <div className="login-form-wrapper">
        <h2 className="login-title">Login</h2>
        <input
          className="login-input"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          className="login-button"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
