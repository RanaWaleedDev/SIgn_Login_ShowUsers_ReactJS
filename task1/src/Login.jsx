import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password} )
    .then(result => {
        console.log(result)
        if(result.data === "Success") {
               navigate('/home')
        }
         
    })
    .catch(err => console.log(err))

    console.log('Email:', email);
    console.log('Password:', password);
  
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2 className="mb-4">Login Form</h2>
        {/* handlesubmit = handleSignup */}
        <form onSubmit={handleLogin}>
       
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
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
        <div>
          <Link to="/register" className="btn btn-secondary" onClick={() => console.log('Login button clicked')}>
            To Signup
          </Link>
        </div>
      </div>
    </div>
  );



}

export default Login;