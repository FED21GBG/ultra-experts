
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import "./App.css";

import './App.css';
import AllTickets from './pages/AllTickets';
import Home from './pages/Home';

function App() {
  return (
    <main className='App'>
      <h1>Events</h1>

      <Router>
        <main>

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/AllTickets' element={<AllTickets />} />
          </Routes>

          <button className='bookBtn'><Link to='/AllTickets'>Book Tickets</Link></button>
        </main>
      </Router>
    </main>
  );
}

export default App;
