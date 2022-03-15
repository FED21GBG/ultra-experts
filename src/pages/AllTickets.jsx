import { useEffect, useState } from "react";
import Card from "../components/EventCard";

function AllTickets() {
    let [events, setEvents] = useState([])
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=4&offset=0'

    useEffect(()=>{
        fetch (url)
        .then(res => res.json())
        .then(data => setEvents(data.results))
    }, [])
    return ( 
        <section>
            <h1>Event</h1>
            {events.map((event, i)=>(
               <Card event={event} key={i} />
            ))}
        </section>
     );
}

export default AllTickets;