
// working
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AdminLogin.css";

const AdminLogin = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validate that the username and password are not empty
    if (!username || !password) {
      setMessage('Please enter both username and password.');
      return;
    }

    // Make an API call to the backend to perform the admin login
    const data = {
      username: username,
      password: password
    };

    fetch('http://localhost:8080/api/adminlogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.status === 200) {
          setMessage('Admin access granted.');
          setIsLoggedIn(true);
          setTimeout(() => {
            navigate('/adminhome'); // Correct way to navigate after login
          }, 3000);
        } else {
          setMessage('Invalid credentials');
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
        setMessage('Error during login. Please try again later.');
      });
  };

  return (
    <><center>
      <h1>Allsmart Home Appliance Service Center</h1>
    <div className="login-container">
      <h2>Admin Login & Customer</h2>
      <form onSubmit={handleLogin}> 
        <div>
          <label htmlFor="username">Username:
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="password">Password:
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <br />
        <div>
          <button type="submit">Login</button> 
        </div>
        <br />
      </form>
      <div className="login-links">
        <button onClick={() => navigate('/login')}>Customer Login</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => navigate('/register')}>Go to Register</button>
      </div>
      <br />
      <div>
        {message && <p>{message}</p>}
      </div>
    </div>
    </center>
    </>
  );
};

export default AdminLogin;

