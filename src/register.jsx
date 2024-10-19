import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setnumber]= useState('')
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`User registered! \nUsername: ${username} \nEmail: ${email}`);
    navigate('/login');
     
  };

  return (
    <div className="content">
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="form-group">
        <input
          type="text"
          placeholder="Username"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone number"
          className="form-control"
          value={number}
          onChange={(e) => {const value = e.target.value;
            if (/^\+?\d*$/.test(value)) {
              setnumber(value);
            }
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
}

export default Register;
