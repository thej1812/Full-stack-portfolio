import { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../utils/auth';

interface Comment {
  _id: string;
  username: string;
  content: string;
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/comments').then(res => setComments(res.data));
  }, []);

  const postComment = async () => {
    const token = getToken();
    if (!token) return;
    const res = await axios.post(
      'http://localhost:5000/api/comments',
      { content },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setComments([res.data, ...comments]);
    setContent('');
  };

  return (
    <div>
      <h2>Comments</h2>
      <textarea value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={postComment}>Post</button>
      <ul>
        {comments.map(c => (
          <li key={c._id}><strong>{c.username}:</strong> {c.content}</li>
        ))}
      </ul>
    </div>
  );
}
