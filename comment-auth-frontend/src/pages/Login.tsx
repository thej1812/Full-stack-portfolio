import { useState } from 'react';
import axios from 'axios';
import { saveToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import Particles from "../assets/Particles/Particles";
import SpotlightCard from '../assets/SpotlightCard/SpotlightCard';
import './login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('https://full-stack-portfolio-jdcz.onrender.com/api/auth/login', {
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

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleCancelClick = () => {
    navigate('/');
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

      <SpotlightCard
        className="custom-spotlight-card"
        spotlightColor="rgba(211, 211, 211, 0.2)"
      >
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
          
          <button
            type="button"
            onClick={handleCancelClick}
            className="login-cancel-button"
          >
            Cancel
          </button>
          
          <div className="login-signup-link">
            <p className="login-signup-text">Don't have an account?</p>
            <button 
              type="button"
              onClick={handleSignupClick}
              className="login-signup-button"
            >
              Create New Account
            </button>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}