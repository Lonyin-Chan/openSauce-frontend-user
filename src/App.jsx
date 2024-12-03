import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import transfer from './pages/transfer';
import Account from './pages/AccountPage'

function Header() {
  const navigate = useNavigate();

  return (
    <header style={{ display: 'flex', justifyContent: 'center', gap: '10px', padding: '1px', background: '#f5f5f5' }}>
      <button onClick={() => navigate('/')} style={{ padding: '10px 20px' }}>Home</button>
      <button onClick={() => navigate('/about')} style={{ padding: '10px 20px' }}>About</button>
      <button onClick={() => navigate('/transfer')} style={{ padding: '10px 20px' }}>Transfer</button>
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
          <Route path="/transfer" element={<transfer />} />
          {/* <Route path="/account" element={<AccountPage/>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
