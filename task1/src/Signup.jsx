import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', {username, email, password} )
    .then(result => {console.log(result)
    navigate('/login')
    })
    .catch(err => console.log(err))


    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2 className="mb-4">Signup Form</h2>
        {/* handlesubmit = handleSignup */}
        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">Signup</button>
          </div>
        </form>
        <div>
          <Link to="/login" className="btn btn-secondary" onClick={() => console.log('Login button clicked')}>
            To Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;



// 23:01 