import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../utils/auth';
import Particles from '@/assets/Particles/Particles';
import SpotlightCard from '@/assets/SpotlightCard/SpotlightCard';
import './signup.css';

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

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleCancel = () => {
    // Clear form data
    setUsername('');
    setPassword('');
    setError('');
    // Navigate to home or previous page
    navigate('/');
  };

  return (
    <div className="signup-container">
      {/* Particle Background */}
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 0,
        }}
      >
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

      {/* Spotlight Effect + Form */}
      <SpotlightCard
        className="custom-spotlight-card"
        spotlightColor="rgba(211, 211, 211, 0.2)"
      >
        <div className="signup-form-wrapper">
          <h2 className="signup-title">Sign Up</h2>
          <form onSubmit={handleSignup} className="signup-form">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="signup-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="signup-input"
            />
            
            <div className="signup-button-group">
              <button type="submit" className="signup-button">
                Create Account
              </button>
              <button 
                type="button" 
                onClick={handleCancel}
                className="signup-cancel-button"
              >
                Cancel
              </button>
            </div>
            
            {error && <p className="signup-error">{error}</p>}
          </form>

          {/* Link to Login */}
          <div className="signup-login-link">
            <p className="signup-login-text">Already have an account?</p>
            <button
              type="button"
              onClick={handleLoginClick}
              className="signup-login-button"
            >
              Click here to Login
            </button>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default Signup;