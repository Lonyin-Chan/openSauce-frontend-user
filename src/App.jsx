import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/AccountPage'

function Header() {
  const navigate = useNavigate();

  return (
    <header style={{ display: 'flex', justifyContent: 'center', gap: '10px', padding: '1px', background: '#f5f5f5' }}>
      <button onClick={() => navigate('/')} style={{ padding: '10px 20px' }}>Home</button>
      <button onClick={() => navigate('/about')} style={{ padding: '10px 20px' }}>About</button>
      <button onClick={() => navigate('/contact')} style={{ padding: '10px 20px' }}>Contact</button>
      <button onClick={() => navigate('/account')} style={{ padding: '10px 20px' }}>Account</button>

    </header>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/account" element={<AccountPage/>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
