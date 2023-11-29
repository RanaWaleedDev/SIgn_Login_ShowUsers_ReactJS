// Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users when the component mounts
    axios.get('http://localhost:3001/users') // Assuming you have an endpoint for fetching all users
      .then(result => setUsers(result.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <strong>Username:</strong> {user.username}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
