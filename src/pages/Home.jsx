import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AllTickets from './AllTickets';



function Home() {
    return (
        <Router>
            <main>
                <h4>Ticketing made easy</h4>
                <Routes>
                    <Route path='/AllTickets' element={<AllTickets />} />
                    {/* <Route path='/' element={<Home/>}/> */}
                </Routes>

                <button className='bookBtn'><Link to='/AllTickets'>Book Tickets</Link></button>
            </main>
        </Router>
    );
}

export default Home;