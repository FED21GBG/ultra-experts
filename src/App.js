import { browserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import AllTickets from './pages/AllTickets';


function App() {
  return (
    <div className="App">
      <h1>Events</h1>
      <AllTickets/>
    </div>
  );
}

export default App;
