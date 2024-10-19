import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './login';
import Register from './register';
import Cards from './Cards';
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'

function App() {
  return (
    <Router>
      <div>
      <div className="dashboard">
        <nav className="navbar">
          <h1>Ahsan Development</h1>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}
function Home() {
  return (
  <>
  <h2>Welcome Ahsan!</h2>
    <Cards img={img1} des="Open Repo" name="Ahsan Khan" age={19} work="Student"></Cards>
    <Cards img={img2} des="Create a New Repo" name="Ahsan Khan" age={19} work="Student"></Cards>
    </>
  );
}

export default App;
