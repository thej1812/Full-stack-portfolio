import { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../utils/auth';
import { useNavigate, Link } from 'react-router-dom';
import './comments.css';
import Particles from '@/assets/Particles/Particles';

// ✅ API base URL from Vite environment
const API_URL = import.meta.env.VITE_API_URL;

interface Comment {
  _id: string;
  username: string;
  content: string;
  createdAt?: string;
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [content, setContent] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // 🔹 Fetch comments on load
  useEffect(() => {
    axios
      .get(`${API_URL}/api/comments`)
      .then(res => setComments(res.data))
      .catch(err => console.error('Error fetching comments:', err));

    const token = getToken();
    setIsLoggedIn(!!token);
  }, []);

  // 🔹 Post a new comment
  const postComment = async () => {
    const token = getToken();
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const res = await axios.post(
        `${API_URL}/api/comments`,
        { content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setComments([res.data, ...comments]);
      setContent('');
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Just now';
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  const getInitials = (username: string) => {
    return username.charAt(0).toUpperCase();
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="comments-container">
      {/* Background Particles */}
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

      <div className="about-me-container">
        <nav className="navbar">
          <div className="logo">TJ</div>
          <div className="nav-menu">
            <ul className="nav-links glass-card">
              <li className="nav-item"><Link to="/">Home</Link></li>
              <li className="nav-item"><Link to="/work">Work</Link></li>
              <li className="nav-item"><Link to="/about">About</Link></li>
              <li className="nav-item active"><Link to="/comments">Share your thoughts</Link></li>
              <li>
                <Link to="/login">
                  <button className="book-call-btn glass-card">Login</button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="comments-header">
          <div className="comments-header-label">THE GUESTBOOK</div>
          <h1 className="comments-main-title">
            <span className="title-accent">Got a message?</span>{' '}
            <span className="title-normal">I'd love to hear from you!</span>
          </h1>
          <p className="comments-subtitle">
            Sign my guestbook and share your idea. You can tell me anything here!
          </p>
        </div>

        {/* Login Section */}
        {!isLoggedIn && (
          <div className="comments-login-section">
            <button onClick={handleLoginClick} className="comments-login-btn">
              Login
            </button>
            <span className="comments-login-text">to continue leaving a message</span>
          </div>
        )}

        {/* Comment Form */}
        {isLoggedIn && (
          <div className="comments-form-section">
            <textarea
              className="comments-textarea"
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="Share your thoughts, feedback, or just say hello!"
              rows={4}
            />
            <button
              onClick={postComment}
              className="comments-post-btn"
              disabled={!content.trim()}
            >
              Post Message
            </button>
          </div>
        )}

        {/* Comments List */}
        <ul className="comments-list">
          {comments.map(c => (
            <li key={c._id} className="comments-item">
              <div className="comments-item-header">
                <div className="comments-avatar">{getInitials(c.username)}</div>
                <div className="comments-user-info">
                  <div className="comments-username">{c.username}</div>
                  <div className="comments-date">{formatDate(c.createdAt)}</div>
                </div>
              </div>
              <div className="comments-content">{c.content}</div>
            </li>
          ))}
        </ul>

        {/* Empty State */}
        {comments.length === 0 && (
          <div className="comments-item">
            <div
              className="comments-content"
              style={{ textAlign: 'center', fontStyle: 'italic' }}
            >
              No messages yet. Be the first to leave a comment!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
