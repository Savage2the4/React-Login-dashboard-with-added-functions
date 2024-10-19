import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        alert('Login successful!');
        navigate('/');
      }
      else if(username === 'admin' && password === 'admin'){

      }
       else {
        alert('Invalid credentials. Please try again.');
      }
    }, 1000);
  };

  return (
    <div className="content">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="form-group">
        <input
          type="text"
          placeholder="Username"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
