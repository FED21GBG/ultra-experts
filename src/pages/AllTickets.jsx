
import { useEffect, useState } from "react";
import Card from "../components/EventCard";
import Home from "./Home";

function AllTickets() {
    let [events, setEvents] = useState([])
    
    const url = 'https://my-json-server.typicode.com/majazocom/events/events'

 
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    function goHom(spell){
        // setEvents (events =>[...events,spell])
        // console.log(spell);
    }
    return (

        <section>
          
            <h1>Event</h1>
            {events.map((event, i) => (
                <Card getEvent={goHom} event={event} key={i} />
            ))}
        </section>
    );
}

export default AllTickets;