import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AllTickets from './AllTickets';



function Home() {
    return (
        <section className='homeContainer'>
            <h1 className='main-title'>Where is at@</h1>
            <h4 className='intro'>Ticketing made easy</h4>
        </section>
    );
}

export default Home;