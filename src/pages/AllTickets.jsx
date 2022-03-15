import { useEffect, useState } from "react";
import Card from "../components/EventCard";

function AllTickets() {
    let [events, setEvents] = useState([])
    const url = 'https://fedeperin-harry-potter-api-en.herokuapp.com/db'

 
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setEvents(data.spells))
    }, [])

    return (
        <section>
            <h1>Event</h1>
            {events.map((event, i) => (
                <Card  event={event} key={i} />
            ))}
        </section>
    );
}

export default AllTickets;